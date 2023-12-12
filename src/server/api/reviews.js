const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//the routes is used as follows:
// /reviews/id -- displays reviews for specified id (this id is plantID)
// /reviews/review/id - displays review for specified review id (this id is review id)

//returns all reviews for specified plant (plantId)
router.get("/:id", async (req, res, next) => {
  try {
    const plantId = +req.params.id;
    const reviews = await prisma.review.findMany({
      where: {
        plantId: plantId,
      },
      include: {
        plant: true,
      },
    });
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});

//returns single review by id (reviewId)
router.get("/review/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const review = await prisma.review.findUnique({ where: { id } });
    res.json(review);
  } catch (err) {
    next(err);
  }
});

//returns edited version for specific review
router.put("/review/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const reviewContent = req.body;
    console.log("reviewContent");
    console.log(reviewContent);
    if (!reviewContent) {
      throw new ServerError(400, "Review content required.");
    }
    const { data: content } = reviewContent;
    const reviews = content.reviews;
    const editReview = await prisma.review.update({
      where: { id },
      data: {
        reviews,
      },
    });
    res.json(editReview);
  } catch (err) {
    next(err);
  }
});

//create a review for the particular plant (plantID)
router.post("/review/create", async (req, res, next) => {
  try {
    const reviewContent = req.body;
    if (!reviewContent) {
      throw new ServerError(400, "Review content required.");
    }
    const { data: content } = reviewContent;
    const reviews = content.reviews;
    const plantId = 1 * content.plantId;
    const newReview = await prisma.review.create({
      data: {
        reviews,
        plant: { connect: { id: plantId } },
      },
    });
    res.json(newReview);
  } catch (err) {
    next(err);
  }
});

//delete a review
router.delete("/review/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    await prisma.review.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// validates if review exist and assigned to user
// const validateReviews = (user, review) => {
//   if (!review) {
//     throw new ServerError(404, "Reviews not found.");
//   }

//   if (review.plantId !== plant.id) {
//     throw new ServerError(
//       403,
//       "No reviews for this plant yet. Would you like to be the first one?"
//     );
//   }
// };

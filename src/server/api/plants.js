const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

// sends all plants
router.get("/", async (req, res, next) => {
  try {
    // finds many plants
    const plants = await prisma.plant.findMany();
    res.json(plants);
  } catch (err) {
    next(err);
  }
});

// send a single plant
router.get("/:id", async (req, res, next) => {
  try {
    // finds a unique plant where the params match the plant id
    const id = +req.params.id;
    const plant = await prisma.plant.findUnique({ where: { id: id } });
    res.json(plant);
  } catch (err) {
    next(err);
  }
});

// must be logged in to access reviews/notes
// validates that user is logged in
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "Please log in to proceed."));
  }
  next();
});

// puts a new review within a plant and sends it
router.post("/review", async (req, res, next) => {
  try {
    // modifies a plant based on id to add the review
    const id = +req.params.plantId;
    const { review } = req.body;
    const addReview = await prisma.review.create({
      where: { plantId: id },
      data: { review },
    });
    res.json(addReview);
  } catch (err) {
    next(err);
  }
});

// validates if favorites exist and assigned to user
// const validateFavorites = (user, favorite) => {
//   if (!favorite) {
//     throw new ServerError(404, "Favorites not found.");
//   }
//   if (favoritePlant.userId !== user.id) {
//     throw new ServerError(403, "No favorites for this user. ");
//   }
// };

// sends all favorited plants
router.get("/account/favoritePlant", async (req, res, next) => {
  try {
    // finds many where user exists and favorite true exists
    // validates user is logged in
    const plants = await prisma.favoritePlant.findMany({
      where: { userId: res.locals.user.id },
    });

    // validateFavorites(res.locals.user, favorite);
    res.json(plants);
  } catch (err) {
    next(err);
  }
});

// adds a plant to favorites
router.post("/account/favoritePlant", async (req, res, next) => {
  try {
    const { plantId } = req.body;
    if (!plantId) {
      throw new ServerError(400, "Plant info required.");
    }
    const favoritePlant = await prisma.favoritePlant.create({
      data: {
        plantId,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(favoritePlant);
  } catch (err) {
    next(err);
  }
});

// removes a plant from favorites
router.delete("/account/favoritePlant/:plantId", async (req, res, next) => {
  try {
    const id = +req.params.plantId;

    const favoritePlant = await prisma.favoritePlant.findUnique({
      where: { id: id },
    });
    // validateFavorites(res.locals.user, favoritePlant);
    if (!favoritePlant) {
      throw new ServerError(404, "Plant not found.");
    }

        await prisma.task.delete({ where: { id }});
        res.sendStatus(204);
    } catch (err) {
        next (err);
    }
});

// sends all stores
router.get("/stores", async (req, res, next) => {
  try {
    // requires zipcode
    const { zip } = req.body;

    const stores = await prisma.stores.findMany({
      where: { zip: zip },
    });
    res.json(stores);
  } catch (err) {
    next(err);
  }
});

// send all favorite stores
router.get("/account/favoritestores", async (req, res, next) => {
  try {
    // finds many where user exists and favorite true exists
    // validates user is logged in
    const stores = await prisma.favoriteStore.findMany({
      where: { userId: res.locals.user.id, storeId },
    });
    validateFavorites(res.locals.user, favorite);
    res.json(stores);
  } catch (err) {
    next(err);
  }
});

// update store as favorite
router.post("/account/favoritestores", async (req, res, next) => {
  try {
    const { storeId } = req.body;
    if (!storeId || !mystore) {
      throw new ServerError(400, "Store info required.");
    }
    const favoriteStore = await prisma.favoriteStore.create({
      data: {
        storeId,
        mystore,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(favoriteStore);
  } catch (err) {
    next(err);
  }
});

// update store as not favorite
router.delete("/account/favoritestores/:storeId", async (req, res, next) => {
  try {
    const storeId = +req.params.storeId;

    const favoriteStore = await prisma.favoriteStore.findUnique({
      where: { storeId },
    });
    validateFavorites(res.locals.user, favoriteStore);

    await prisma.task.delete({ where: { storeId } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

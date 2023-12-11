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

// returns array by plant category
router.get("/plantType/:id", async (req, res, next) => {
  try {
    // assigned id to each category and paired up in the object
    const id = req.params.id;
    const idPairType = {
      1: "Hanging",
      2: "Fern",
      3: "Flower",
      4: "Palm",
      5: "Cactus And Succulent",
      6: "Bromeliad",
      7: "Anthurium",
      8: "Foliage Plant",
    };
    const plantType = idPairType[id];
    const plants = await prisma.plant.findMany({
      where: { category: plantType },
    });
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

// validates if favorites exist and assigned to user
// const validateFavorites = (user, favorite) => {
//   if (!favorite) {
//     throw new ServerError(404, "Favorites not found.");
//   }
//   if (favorite.userId !== user.id) {
//     throw new ServerError(403, "No favorites for this user. ");
//   }
// };


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
router.get("/account/favorite", async (req, res, next) => {
  try {
    // finds many where user exists and favorite true exists
    // validates user is logged in
    const stores = await prisma.favorite.findMany({
      where: { userId: res.locals.user.id, storeId },
    });
    validateFavorites(res.locals.user, favorite);
    res.json(stores);
  } catch (err) {
    next(err);
  }
});

// update store as favorite
router.post("/account/favorite", async (req, res, next) => {
  try {
    const { storeId, mystore } = req.body;
    if (!storeId || !mystore) {
      throw new ServerError(400, "Store info required.");
    }
    const favoriteStore = await prisma.favorite.create({
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
router.delete("/account/favorite/:storeId", async (req, res, next) => {
  try {
    const storeId = +req.params.storeId;

    const favoriteStore = await prisma.favorite.findUnique({
      where: { storeId },
    });
    validateFavorites(res.locals.user, favoriteStore);

    await prisma.task.delete({ where: { storeId } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

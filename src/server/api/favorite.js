const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

// sends all favorited plants
router.get("/", async (req, res, next) => {
    try {
      // finds many where user exists and favorite true exists
      // validates user is logged in
      const plants = await prisma.favoritePlant.findMany({
        where: { userId: res.locals.user.id },
        include: { 
          plant: true,
          notes: true, 
        },
      });
      // validateFavorites(res.locals.user, favorite);
      res.json(plants);
    } catch (err) {
      next(err);
    }
  });
  
  // sends one favorited plant
  router.get(`/:id`, async (req, res, next) => {
    try {
      const id = +req.params.id;
      // finds many where user exists and favorite true exists
      // validates user is logged in
      const plant = await prisma.favoritePlant.findUnique({
        where: { 
          userId: res.locals.user.id,
        id: id },
        include: { 
          plant: true,
          notes: true },
      });
      // validateFavorites(res.locals.user, favorite);
      res.json(plant);
    } catch (err) {
      next(err);
    }
  });
  
  // adds a plant to favorites     still not working
  router.post("/", async (req, res, next) => {
    try {
      const { note, plantId } = +req.body;
      // if (!plantId) {
      //   throw new ServerError(400, "Plant info required.");
      // }
      const favoritePlant = await prisma.favoritePlant.create({
        data: {
          note: note,
          plant: plantId,
          notes: [{ connect: { id: prisma.favoritePlant.note }}],
          user: { connect: { id: res.locals.user.id }},
          plant: { connect: { id: prisma.favoritePlant.plant }},
          include: { 
            plant: true,
            notes: true },
        },
      });
      res.json(favoritePlant);
    } catch (err) {
      next(err);
    }
  });
  
  // removes a plant from favorites
  router.delete("/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
  
      const favoritePlant = await prisma.favoritePlant.findUnique({
        where: { id },
      });
      // validateFavorites(res.locals.user, favoritePlant);
  
      await prisma.favoritePlant.delete({ where: { id: id } });
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  });
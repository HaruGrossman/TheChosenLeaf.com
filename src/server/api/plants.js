const { ServerError } = require ("../errors");
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
        next (err);
    }
});

// send a single plant
router.get("/:id", async (req, res, next) => {
    try {
    // finds a unique plant where the params match the plant id
        const id = +req.params.id;
        const plant = await prisma.plant.findUnique({ where: { id: id}});
        res.json(plant);
    } catch (err){
        next (err);
    }
});

// must be logged in to access reviews/notes
// validates that user is logged in
router.use((req, res, next) => {
    if (!res.locals.user) {
        return next(new ServerError(401, "Please log in to proceed."))
    }
    next();
});

// puts a new review within a plant and sends it
router.post("/:id", async (req, res, next) => {
    try {
        // modifies a plant based on id to add the review
        const id = +req.params.plantId;
        const { review } = req.body;
        const addReview = await prisma.review.create({
            where: { plantId: id},
            data: { review },
        });
        res.json(addReview);
    } catch (err) {
        next (err);
    }
});

// validates if favorites exist and assigned to user
const validateFavorites = ( user, favorite ) => {
    if (!favorite) {
        throw new ServerError(404, "Favorites not found."); 
    } if (favorite.userId !== user.id) {
        throw new ServerError(403, "No favorites for this user. ")
    }
};

// sends all favorited plants
router.get("/account/favorite", async (req, res, next) => {
    try {
        // finds many where user exists and favorite true exists
        // validates user is logged in 
        const plants = await prisma.favorite.findMany({
            where: { userId: res.locals.user.id, plantId }
        });
        validateFavorites(res.locals.user, favorite)
        res.json(plants);
    } catch (err) {
        next(err);
    }
});

// adds a plant to favorites
router.post("/account/favorite", async (req, res, next) => {
    try {
        const { plantId, myplant } = req.body;
        if (!plantId || !myplant ) {
            throw new ServerError(400, "Plant info required.");
        }
        const favoritePlant = await prisma.favorite.create({
            data: {
                plantId, myplant, 
                user: { connect: { id: res.locals.user.id }},
            },
        });
        res.json(favoritePlant);
    } catch (err) {
        next (err);
    }
});

// removes a plant from favorites
router.delete("/account/favorite/:plantId", async (req, res, next) => {
    try {
        const plantId = +req.params.plantId;

        const favoritePlant = await prisma.favorite.findUnique({ where: { plantId } });
        validateFavorites(res.locals.user, favoritePlant);

        await prisma.task.delete({ where: { plantId }});
        res.sendStatus(204);
    } catch (err) {
        next (err);
    }
});

// validates if notes exist and assigned to user
const validateNotes = ( user, notes ) => {
    if (!notes) {
        throw new ServerError(404, "Notes not found.");
    } if (notes.userId !== user.id) {
        throw new ServerError(403, "No notes for this user.")
    }
};

// sends all notes
router.get("/account/mynotes", async (req, res, next) => {
    try {
        // validates user is logged in
        // finds many notes
        const notes = await prisma.notes.findMany({
            where: { userId: res.locals.user.id }
        });
        validateNotes(res.locals.user, notes);
        res.json(notes)
    } catch (err) {
        next (err);
    }
});

// creates a new note in the account page
router.post("/account/mynotes", async (req, res, next) => {
    try {
        // validates user is logged in
        // requires an id and user info
        const { description } = req.body;
        if (!description) {
            throw new ServerError(400, "Description required.");
        }
        const note = await prisma.notes.create({
            data: {
                id,
                description, 
                user: { connect: { id: res.locals.user.id }},
            },
        });
        res.json(note);
    } catch (err) {
        next (err);
    }
});

// puts an edit on a note in the account page
router.put("/account/mynotes/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;
        const { description } = req.body;
        // validates user is logged in
        // requires an id and user info
        const note = await prisma.notes.findUnique({ where: { id }});
        validateNotes(res.locals.user, note);

        const updatedNote = await prisma.notes.update({
            where: { id }, 
            data: { description },
        });
        res.json(updatedNote);
    } catch (err) {
        next (err);
    }
});

// deletes a note in account page
router.delete("/account/mynotes/:id", async (req, res, next) => {
    try {
        // validates user is logged in
        // finds unique where id exists and user info
        const id = +req.params.id;

        const note = await prisma.notes.fnidUnique({ where: { id} });
        validateNotes(res.locals.user, note);

        await prisma.notes.delete({ where: { id }});
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
            where: { zip: zip},
        });
        res.json(stores);
    } catch (err) {
        next (err);
    }
});

// send all favorite stores
router.get("/account/favorite", async (req, res, next) => {
    try {
        // finds many where user exists and favorite true exists
        // validates user is logged in 
        const stores = await prisma.favorite.findMany({
            where: { userId: res.locals.user.id, storeId }
        });
        validateFavorites(res.locals.user, favorite)
        res.json(stores);
    } catch (err) {
        next(err);
    }
});

// update store as favorite
router.post("/account/favorite", async (req, res, next) => {
    try {
        const { storeId, mystore } = req.body;
        if (!storeId || !mystore ) {
            throw new ServerError(400, "Store info required.");
        }
        const favoriteStore = await prisma.favorite.create({
            data: {
                storeId, mystore, 
                user: { connect: { id: res.locals.user.id }},
            },
        });
        res.json(favoriteStore);
    } catch (err) {
        next (err);
    }
});

// update store as not favorite
router.delete("/account/favorite/:storeId", async (req, res, next) => {
    try {
        const storeId = +req.params.storeId;

        const favoriteStore = await prisma.favorite.findUnique({ where: { storeId } });
        validateFavorites(res.locals.user, favoriteStore);

        await prisma.task.delete({ where: { storeId }});
        res.sendStatus(204);
    } catch (err) {
        next (err);
    }
});
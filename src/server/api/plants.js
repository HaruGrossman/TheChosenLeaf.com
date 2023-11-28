const { ServerError } = require ("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

// sends all plants 
router.get("/", async (req, res, next) => {
    try {
        // finds many plants 
        const plants = await prisma.plant.findMany
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
        const plant = await prisma.plant.findUnique({ where: { id }});
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
// validates that user is logged in -- needed??
router.put("/:id", async (req, res, next) => {
    try {
        // modifies a plant based on id to add the review
        const id = +req.params.id;
        const { review } = req.body;
        const addReview = await prisma.plant.update({
            where: {id},
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
    } if (myPlant.userId !== user.id) {
        throw new ServerError(403, "No favorites for this user. ")
    }
};

// sends all favorited plants
// validates user is logged in 
// finds many where user exists and favorite true exists

// validates if notes exist and assigned to user
const validateNotes = ( user, note ) => {
    if (!note) {
        throw new ServerError(404, "Notes not found.");
    } if (task.userId !== user.id) {
        throw new ServerError(403, "No notes for this user.")
    }
};

// sends all notes
// validates user is logged in
// finds many notes

// creates a new note in the account page
// validates user is logged in
// requires a id and user info

// puts an edit on a note in the account page
// validates user is logged in
// requires an id and user info

// deletes a note in account page
// validates user is logged in
// finds unique where id exists and user info

// gets all stores
// requires zip

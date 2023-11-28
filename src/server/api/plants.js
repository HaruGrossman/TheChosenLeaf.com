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
// finds a unique plant where the params match the plant id

// must be logged in to access reviews/notes
// validates that user is logged in

// puts a new review within a plant and sends it
// validates that user is logged in
// modifies a plant based on id to add the review

// sends all favorited plants
// finds many where user exists and favorite true exists

// sends all notes
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
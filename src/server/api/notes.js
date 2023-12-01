const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access notes. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

// validates if notes exist and assigned to user
const validateNotes = ( user, notes ) => {
  if (!notes) {
      throw new ServerError(404, "Notes not found.");
  } if (notes.userId !== user.id) {
      throw new ServerError(403, "No notes for this user.")
  }
};

/** Sends all notes */
router.get("/", async (req, res, next) => {
  try {
      // validates user is logged in
      // finds many notes
    const notes = await prisma.note.findMany({
      where: { userId: res.locals.user.id },
    });
    validateNotes(res.locals.user, notes);
    res.json(notes);
  } catch (err) {
    next(err);
  }
});

/** Checks if note exists and belongs to given user */
// const validateNote = (user, note) => {
//   if (!note) {
//     throw new ServerError(404, "Note not found.");
//   }

//   if (note.userId !== user.id) {
//     throw new ServerError(403, "This note does not belong to you.");
//   }
// };

/** Updates single note by id */
router.put("/update/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { note } = req.body;

    const findNote = await prisma.note.findUnique({ where: { id : id} });
    validateNotes(res.locals.user, note);

    const updatedNote = await prisma.note.update({
      where: { id : id },
      data: { note },
    });
    res.json(updatedNote);
  } catch (err) {
    next(err);
  }
});


/** Creates new note and sends it */
router.post("/create", async (req, res, next) => {
  try {
    const { note } = req.body;
    if (!note) {
      throw new ServerError(400, "Note required.");
    }

    const newNote = await prisma.note.create({
      data: {
        note,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(newNote);
  } catch (err) {
    next(err);
  }
});


/** Sends single note by id */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const note = await prisma.note.findUnique({ where: { id : id } });
    validateNotes(res.locals.user, note);

    res.json(note);
  } catch (err) {
    next(err);
  }
});


/** Deletes single note by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const note = await prisma.note.findUnique({ where: { id : id } });
    validateNotes(res.locals.user, note);

    await prisma.note.delete({ where: { id : id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  };
});

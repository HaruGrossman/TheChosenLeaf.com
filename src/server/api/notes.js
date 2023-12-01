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

/** Sends all notes */
router.get("/", async (req, res, next) => {
  try {
    const notes = await prisma.note.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json(notes);
  } catch (err) {
    next(err);
  }
});

/** Checks if note exists and belongs to given user */
const validateNote = (user, note) => {
  if (!note) {
    throw new ServerError(404, "Note not found.");
  }

  if (note.userId !== user.id) {
    throw new ServerError(403, "This note does not belong to you.");
  }
};

/** Updates single note by id */
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { note } = req.body;

    const noteById = await prisma.task.findUnique({ where: { id } });
    validateNote(res.locals.user, note);

    const updatedNote = await prisma.task.update({
      where: { id },
      data: { note },
    });
    res.json(updatedNote);
  } catch (err) {
    next(err);
  }
});








/** Creates new task and sends it */
router.post("/", async (req, res, next) => {
  try {
    const { description, done } = req.body;
    if (!description) {
      throw new ServerError(400, "Description required.");
    }

    const task = await prisma.task.create({
      data: {
        description,
        done: done ?? false,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(task);
  } catch (err) {
    next(err);
  }
});



/** Sends single task by id */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const task = await prisma.task.findUnique({ where: { id } });
    validateTask(res.locals.user, task);

    res.json(task);
  } catch (err) {
    next(err);
  }
});



/** Deletes single task by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const task = await prisma.task.findUnique({ where: { id } });
    validateTask(res.locals.user, task);

    await prisma.task.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

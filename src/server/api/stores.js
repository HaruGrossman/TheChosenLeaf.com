const { ServerError } = require("../errors");
const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;

// router.get("/", async (req, res, next) => {
//     try {
//         const stores = await prisma.favoritestore.findMany({
//             where: { userId : res.locals.user.id }
//         })
//     }
// })
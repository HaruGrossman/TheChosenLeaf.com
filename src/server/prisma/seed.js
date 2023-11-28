const prisma = require("../prisma");
//import the csv file

/** Seeds the database with a user*/
// const seed = async () => {
  //loop through the csv file for each item

  //create plant data with looped items
  //data: {
  //    latin
  //    common
  //    category
  //    tempmax
  //    tempmin
  //    ideallight
  //    toleratedlight
  //    watering
  //    image
  //    myplants
  //    notes
  //    reviews
  //    stores
  //    spare1
  //    spare2
  //}

//commented out the previous code, can be deleted after start coding
//   await prisma.user.create({
//     data: {
//       username: "foo",
//       password: "bar",
//       tasks: {
//         create: [
//           { description: "task 1" },
//           { description: "task 2" },
//           { description: "task 3" },
//         ],
//       },
//     },
//   });
// };

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

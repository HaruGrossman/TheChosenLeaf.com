const prisma = require("../prisma");
const plantData = require("./plantData");
 //can be commented after initial seed since username is unique cannot be created again
const seed = async () => {
  await prisma.user.create({
    data: {
      username: "panda",
      password: "123",
      notes: {
        create: [{ note: "note 1" }, { note: "note 2" }],
      },
    },
   update:{},
    }
);

  const createPlantData = async () => {
    const data1 = plantData.data;
    for (let i = 0; i < data1.length; i++) {
      const data = {
        name: data1[i].common,
        latin: data1[i].latin,
        category: data1[i].category,
        tempmax: data1[i].tempmax,
        tempmin: data1[i].tempmin,
        ideallight: data1[i].ideallight,
        toleratedlight: data1[i].toleratedlight,
        watering: data1[i].watering,
        image: data1[i].image,
        favorite: false,
      };
      await prisma.plant.create({
        data,
      });
    }
  };
  createPlantData();
};
//commented out the previous code, can be deleted after start coding

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    // process.exit(1);
  });

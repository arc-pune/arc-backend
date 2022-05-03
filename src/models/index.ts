const sequelize = require("../db/config");
const User = require("./user");

(async () => {
  await sequelize.authenticate().then(() => {
    console.log("DB connected!!!");
  });
  await sequelize.sync({ alter: true });
})();

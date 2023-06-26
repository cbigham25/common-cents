const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

// JAWSDB_URL is created when we setup the mySQL JAWs Add On.
// If its not there, you are probably in your local
// Or use NODE_ENV===production

if (!process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      port: 3306,
    }
  );
} else {
  //Jaws DB Production URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}

module.exports = sequelize;

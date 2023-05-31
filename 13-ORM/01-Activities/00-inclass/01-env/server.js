require("dotenv").config();

const PORT = process.env.PORT || 3001;

const fakeDbConnection = {
  dbname: process.env.DB_NAME,
  dbuser: process.env.DB_USER,
  dbpass: process.env.DB_PASS,
};

console.log(fakeDbConnection);
console.log(process.env.MESSAGE);

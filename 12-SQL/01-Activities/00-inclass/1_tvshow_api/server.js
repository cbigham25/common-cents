const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "tvDB",
  },
  console.log("Connected to Database.")
);

app.get("/api/titles", (req, res) => {
  db.query("SELECT title FROM tvshow", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

app.get("/api/title/:titleID", (req, res) => {
  let titleID = req.params.titleID; //"5; Select * from creditInfo NONONO"
  db.query("SELECT title FROM tvshow WHERE id =  ?", titleID, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});
// SELECT MAX(price) as maxprice, MIN(price) as minprice, AVG(price) as averageprice FROM mall_db.cars;
app.get("/api/totals", (req, res) => {
  db.query(
    "SELECT MAX(price) as maxprice, MIN(price) as minprice, AVG(price) as averageprice FROM cars;",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      /// res.json(result[0].minprice);
      res.json(result);
    }
  );
});

// SELECT MAX(price) as maxprice, MIN(price) as minprice, AVG(price) as averageprice FROM mall_db.cars;
app.put("/api/show/", (req, res) => {
  const body = req.body;

  const { showId, title, genre, network } = body;

  db.query(
    "UPDATE tvshow SET title = ?, genre = ?, network = ? WHERE id = ?",
    [title, genre, network, showId],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else if (!result.affectedRows) {
        res.json({ message: "TV SHow Not FOund" });
      } else {
        res.json({ message: `Show update with ${title}.` });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require("./utils/helpers");
// Create an instance of the express app.
const app = express();

const PORT = process.env.PORT || 8080;

// Data
const carsForSale = require("./model/cars.json");

//Session Options
const sess = {
  secret: "SUPERSECRET123123123",
  resave: false,
  saveUnitialized: true,
};

//Use Session
app.use(session(sess));

// Static Directory for css/js/images
app.use(express.static("public"));

//body parser for Posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({
  helpers,
});

//Sets handlebars configurations
app.engine("handlebars", hbs.engine);
//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");

app.get("/cars/:model", function (req, res) {
  console.log(req.params.model);
  for (let i = 0; i < carsForSale.length; i++) {
    if (carsForSale[i].model.toLowerCase() === req.params.model.toLowerCase()) {
      req.session.save(() => {
        req.session.lastModel = req.params.model;
        req.session.count = req.session.count + 1;
      });

      return res.render("car", carsForSale[i]);
    }
  }
});

app.get("/carsbyid/:id", function (req, res) {
  return res.render("car", carsForSale[req.params.id - 1]);
});

app.get(["/", "/carsforsale"], function (req, res) {
  res.render("allcars", {
    carsArray: carsForSale,
    buyer: "Eric",
    seller: "Paul",
    lastModel: req.session.lastModel,
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

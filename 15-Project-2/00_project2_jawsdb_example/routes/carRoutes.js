const router = require("express").Router();
const Cars = require("../models/Cars");

router.post("/", (req, res) => {
  console.log(req.body);

  Cars.create({
    make: req.body.make,
    model: req.body.model,
    yearMade: req.body.yearMade,
  }).then((newCar) => {
    res.json(newCar);
  });
});

router.put("/:car_id", (req, res) => {
  Cars.update(
    {
      make: req.body.make,
      model: req.body.model,
      yearMade: req.body.yearMade,
    },
    {
      where: {
        car_id: req.params.car_id,
      },
    }
  )
    .then((updatedCar) => {
      res.json(updatedCar);
    })
    .catch((err) => res.json(err));
});

router.delete("/:car_id", (req, res) => {
  Cars.destroy({
    where: {
      car_id: req.params.car_id,
    },
  }).then((deletedCar) => {
    res.json(deletedCar);
  });
});

module.exports = router;

function Staff(name, doctor) {
  this.name = name;
  this.doctor = doctor;
  this.hospital = "Chris' General";
  this.paging = function () {
    if (this.doctor) {
      console.log(`Paging Dr. ${this.name}!`);
    } else {
      console.log(`${this.name} doesn't have a beeper.`);
    }
  };
}

const bennett = new Staff("Bennett", true);
const jayden = new Staff("Jayden", false);
const paul = new Staff("Paul", true);
const miguel = new Staff("Miguel", false);

Staff.prototype.benefits = ["Dental", "Medical", "VSP", "401k"];

//console.log(jayden.benefits);

Array.prototype.showFirst = function () {
  console.log(this[0]);
};

const animals = ["Tiger", "lion", "bear"];

animals.showFirst();

// var bennett = {
//   name: "Bennett",
//   docter: true,
//   paging: function () {
//     console.log("Paging Bennett");
//   },
// };

// var jayden = {
//   name: "Jayden",
//   docter: false,
//   paging: function () {
//     console.log("No Pager");
//   },
// };

// var paul = {
//   name: "Paul",
//   docter: true,
//   paging: function () {
//     console.log("Paging Dr. Paul");
//   },
// };

// var miguel = {
//   name: "Miguel",
//   docter: false,
//   paging: function () {
//     console.log("No Pager");
//   },
// };

// paul.paging();

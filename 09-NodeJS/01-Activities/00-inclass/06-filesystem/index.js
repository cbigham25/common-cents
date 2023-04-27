const fs = require("fs");

// const firstName = process.argv[2];

// fs.writeFile("message.txt", `HI THERE ${firstName}!`, function (err) {
//   err ? console.log(err) : console.log("SUCCESS!");
// });

// fs.readFile("message.txt", "utf8", (err, data) => {
//   err ? console.log(err) : console.log(data);
// });

fs.appendFile("message.txt", `HOW ARE YOU?!`, function (err) {
  err ? console.log(err) : console.log("SUCCESS!");
});

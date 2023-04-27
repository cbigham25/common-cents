const math = require("./maths");
// TODO: Import `maths.js`
// const math = {
//   sum: (a, b) => a + b,
//   difference: (a, b) => a - b,
//   product: (a, b) => a * b,
//   quotient: (a, b) => a / b,
// };
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

switch (operation) {
  case "sum":
    console.log(math.sum(numOne, numTwo));
    break;
  case "difference":
    console.log(math.difference(numOne, numTwo));
    break;
  case "product":
    console.log(math.product(numOne, numTwo));
    break;
  case "quotient":
    console.log(math.quotient(numOne, numTwo));
    break;
  default:
    console.log("NOT A MATH FUNCTION!");
}
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

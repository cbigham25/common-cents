const a = process.argv[2];
const b = process.argv[3];
let c = a === b ? true : false;

if (a === b) {
  console.log(true);
} else {
  console.log(false);
}
// Other options

console.log(a === b ? true : false);

console.log(c);

console.log(a === b);

console.log(process.argv[2] === process.argv[3]);

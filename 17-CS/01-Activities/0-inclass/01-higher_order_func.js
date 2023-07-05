function multi(total, num, index, array) {
  const multiTotal = total * num;
  return multiTotal;
}

const numbers = [20, 10, 5];

// Reduce by means of...
const finalNumber = numbers.reduce(multi);

console.log(finalNumber);

// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  return total/array.length;
}

const tempArray = [1, 5, 10, 15, 20]
avg(tempArray);
module.exports = avg;

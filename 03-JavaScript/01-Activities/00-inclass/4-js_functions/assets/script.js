var DrName = "Johnson";
console.log(DrName.toUpperCase());

addNumber(4,1);
addNumber(2,5);
addNumber(8,22);
addNumber(8,22);
addNumber(8,22);
addNumber(8,22);


//Expression
var isLessThan = function (num1, num2){ 
  if (num1 < num2){
    return "YES, " + num1 + " IS LESS THAN " + num2;
  }
  else{
    return "NO, " + num1 + " IS NOT LESS THAN " + num2;
  }
}
console.log(isLessThan(2,7));
console.log(isLessThan(8,8));



var total = 5;

var someNumber = 16;
// Declaration
function addNumber(num1, num2){ 
  var total = num1 + num2;
  console.log("The total is: " + total);
  console.log("someNumber is " + someNumber);
}

console.log("total is " + total)
console.log("someNumber is " + someNumber);

function addTitle(name){ 
  return "Mr. " + name;
}

console.log(addTitle("Smith"))



// valueOne = 4;
// valueTwo = 1;
// total = valueOne + valueTwo;
// console.log(total)

// valueOne = 2;
// valueTwo = 5;
// total = valueOne + valueTwo;
// console.log(total)

// valueOne = 8;
// valueTwo = 22;
// total = valueOne + valueTwo;
// console.log(total)
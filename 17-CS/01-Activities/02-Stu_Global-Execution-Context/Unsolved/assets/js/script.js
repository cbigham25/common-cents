// 1) Where is carNoise stored?

// carNoise is stored inside of global
const carNoise = 'Honk';
// 2) Where is goFast stored?
//  goFast is stored inside of the global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is stored inside of functional execution context (since it is a value)
  
  // 5) Where is makeNoise stored?
  // makeNoise is stored inside of the functional execution context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is stored in the functional execution context (they are stacked on
  // each other)
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// This is an if statement saying that if it confirmed that you want to go fast,
// you will go 80 mph
if(confirm("Do you want to go fast?")) {
  goFast(80);
}

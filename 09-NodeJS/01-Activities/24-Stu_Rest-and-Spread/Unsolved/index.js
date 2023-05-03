// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];
// this is an array with the name of 'songs' that holds the data you see above

// TODO: Which operator is being used here?
const newSongs = [...songs];
// this is a constant with a property named newSongs and will attempt to place new songs at the end of the array

// TODO: What do you expect to be logged in the console?
console.log(newSongs);
//this is attempting to console log all the new songs from "newSong"

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));
//i expect the sum of all 3 numbers to be logged as a total

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};
//

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));
//

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
//

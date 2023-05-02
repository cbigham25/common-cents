const fruits = ["apple", "kiwi", "melon", "grapes", "oranges"];

const [fruitA, fruitB, fruitC, ...otherFruits] = fruits;

var fullName = {
  firstName: "Chris",
  lastName: "Woolcott",
  hobbies: {
    firstHobby: "Mow",
    secondHobby: "Computers",
    thirdHobby: "Music",
  },
};

// const firstName = fullName.firstName;
// const lastName = fullName.lastName;
// const hobbies = fullName.hobbies;

//const { firstName, lastName, hobbies } = fullName;
console.log(fullName.hobbies);

const { firstHobby, secondHobby, thirdHobby: lastHobby } = fullName.hobbies;

console.log(lastHobby);

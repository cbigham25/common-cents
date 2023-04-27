const userName = process.argv[2];
const firstName = process.argv[3];

//console.log(`Welcome user ${userName}, your first name is ${firstName}`);

const ourArray = process.argv;

for (let i = 2; i < ourArray.length; i++) {
  console.log(ourArray[i] + " ");
}

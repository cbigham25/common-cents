const db = require('../config/connection');
const { User, Expense } = require('../models')
const userSeeds = require('./userSeeds.json');
const expenseSeeds = require('./expenseSeeds.json');

db.once('open', async () => {
  try {
    await Expense.deleteMany({});
    await User.deleteMany({});

    const userData = await User.create(userSeeds);
    for (let j = 0; j < userData.length; j++) {
      for (let i = 0; i < expenseSeeds.length; i++) {
        const { _id } = await Expense.create(expenseSeeds[i]);
        console.log('expense', _id, userData[j].username)
        const userToUpdate = await User.findOneAndUpdate(
          { username: userData[j].username },
          {
            $addToSet: {
              expenses: _id,
            },
          }
        );
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

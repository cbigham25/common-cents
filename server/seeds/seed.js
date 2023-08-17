const db = require('../config/connection');
const { User, Expense, Income } = require('../models');  
const userSeeds = require('./userSeeds.json');
const expenseSeeds = require('./expenseSeeds.json');
const incomeSeeds = require('./incomeSeeds.json');

db.once('open', async () => {
  try {
    await Expense.deleteMany({});
    await Income.deleteMany({});  
    await User.deleteMany({});

    const userData = await User.create(userSeeds);
    
    for (let j = 0; j < userData.length; j++) {
      for (let i = 0; i < expenseSeeds.length; i++) {
        const { _id: expenseId } = await Expense.create(expenseSeeds[i]);
        console.log('expense', expenseId, userData[j].username)
        await User.findOneAndUpdate(
          { username: userData[j].username },
          { $addToSet: { expenses: expenseId } }
        );
      }
      
      for (let i = 0; i < incomeSeeds.length; i++) {
        const { _id: incomeId } = await Income.create(incomeSeeds[i]);
        console.log('income', incomeId, userData[j].username)
        await User.findOneAndUpdate(
          { username: userData[j].username },
          { $addToSet: { incomes: incomeId } } 
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

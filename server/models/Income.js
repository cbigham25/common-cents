const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  source: String,
  amount: Number,
  budget: String, 
  budgetName: String,
  need: String,
  needAmount: Number,
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;


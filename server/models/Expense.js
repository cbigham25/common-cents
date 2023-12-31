const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const expenseSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isFinite,
      message: '{VALUE} is not a valid number'
    }
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  month: {
    type: String,
    validate: {
      validator: (value) => /^(0[1-9]|1[0-2])\d{4}$/.test(value),
      message: '{VALUE} is not a valid month/year format'
    }
  },
});

const Expense = model('Expense', expenseSchema);

module.exports = Expense;

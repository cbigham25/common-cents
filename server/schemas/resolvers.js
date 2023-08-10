const { AuthenticationError } = require('apollo-server-express');
const { User, Expense } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('expenses');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('expenses');
    },
    expenses: async (parent, { username }) => {
      if (username) {
        const user = await User.findOne({ username }).populate('expenses');
        return user.expenses;
      }
      return Expense.find().sort({ createdAt: -1 });
    },
    expense: async (parent, { expenseId }) => {
      return Expense.findOne({ _id: expenseId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('expenses');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addExpense: async (parent, { amount, category }, context) => {
      if (context.user) {
        const expense = await Expense.create({
          amount,
          category,
          user: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { expenses: expense._id } }
        );

        return expense;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeExpense: async (parent, { expenseId }, context) => {
      if (context.user) {
        const expense = await Expense.findOneAndDelete({
          _id: expenseId,
          user: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { expenses: expense._id } }
        );

        return expense;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

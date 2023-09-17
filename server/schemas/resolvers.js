const { AuthenticationError } = require('apollo-server-express');
const { User, Expense, Income } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('expenses').populate('incomes');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('expenses').populate('incomes');
        },
        expenses: async (parent, { username, category, month }) => {
            const filters = {};
            if (username) {
                const user = await User.findOne({ username });
                filters.user = user._id;
            }
            if (category) filters.category = category;
            if (month) filters.month = month;

            return Expense.find(filters).sort({ createdAt: -1 });
        },
        expense: async (parent, { expenseId }) => {
            return Expense.findOne({ _id: expenseId });
        },
        incomes: async (parent, { username, category, month }) => {
            const filters = {};
            if (username) {
                const user = await User.findOne({ username });
                filters.user = user._id;
            }
            if (category) filters.category = category;
            if (month) filters.month = month;

            return Income.find(filters).sort({ createdAt: -1 });
        },
        income: async (parent, { incomeId }) => {
            return Income.findOne({ _id: incomeId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('expenses');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addExpense: async (_, { amount, category, username, month }, context) => {
            const user = await User.findOne({ username: username });

            if (!user) {
                throw new Error('User not found');
            }

            const expense = new Expense({ amount, category, user: user._id, month });
            await expense.save();

            user.expenses.push(expense);
            await user.save();

            return expense;
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
        addIncome: async (parent, { amount, category, username, month }) => {
            const user = await User.findOne({ username });
            
            if (!user) {
                throw new Error('User not found');
            }
        
        
            const income = await Income.create({ amount, category, user: user._id, month });
            await income.save();

            user.incomes.push(income);
            await user.save();

            return income;
        },              
        removeIncome: async (parent, { incomeId }, context) => {
            if (context.user) {
                const income = await Income.findOneAndDelete({
                    _id: incomeId,
                    user: context.user._id,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { incomes: income._id } }
                );

                return income;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;

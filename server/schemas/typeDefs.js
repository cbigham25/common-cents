// Blaine: not sure if you guys know of 'float' yet but it literally just allows numbers with decimal points to be typed in.
// The resolvers just need to be updated accordingly and everything with the client side Budget.js code 
// should work properly once that is done. 
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    expenses: [Expense]!
<<<<<<< HEAD
    budgets: [Budget]! 
=======
    incomes: [Income]!
>>>>>>> 112c1b1c341d3ecb61953c6cffb7e81e34d7c56e
  }

  type Expense {
    _id: ID
    amount: Float!
    category: String
    createdAt: String
    user: User
  }

<<<<<<< HEAD
  type Budget {
    _id: ID
    name: String
    amount: Float
    need: String
    needAmounts: NeedAmounts
    user: User
  }

  type NeedAmounts {
    Groceries: Float
    Gas: Float
    Debt: Float
    Rent: Float
    Bills: Float
    Other: Float
  }
=======
  type Income {
    _id: ID
    amount: Float
    category: String
    createdAt: String
    user: User
}
>>>>>>> 112c1b1c341d3ecb61953c6cffb7e81e34d7c56e

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
<<<<<<< HEAD
    user(username: String!)
    expenses(username: String, category: String, month: Int)
    expense(expenseId: ID!)
=======
    user(username: String!): User
    expenses(username: String, category: String, month: Int): [Expense] 
    expense(expenseId: ID!): Expense
    incomes(username: String, category: String, month: Int): [Income] 
    income(incomeId: ID!): Income
>>>>>>> 112c1b1c341d3ecb61953c6cffb7e81e34d7c56e
    me: User
    budgets: [Budget] 
  }

  type Mutation {
<<<<<<< HEAD
    addUser(username: String!, password: String!)
    login(username: String!, password: String!)
    addExpense(amount: Float!, category: String)
=======
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addExpense(amount: Float!, category: String!, username: String!): Expense
>>>>>>> 77585c68c511c8a9d25c8df6d93b379d7fe46034
    removeExpense(expenseId: ID!): Expense
<<<<<<< HEAD
    addBudget(name: String!, amount: Float, need: String, needAmounts: NeedAmountsInput)
    updateBudget(id: ID!, name: String, amount: Float, need: String, needAmounts: NeedAmountsInput)
    removeBudget(id: ID!)
  }
  
  input NeedAmountsInput {
    Groceries: Float
    Gas: Float
    Debt: Float
    Rent: Float
    Bills: Float
    Other: Float
=======
    addIncome(amount: Float!, category: String): Income
    removeIncome(incomeId: ID!): Income
>>>>>>> 112c1b1c341d3ecb61953c6cffb7e81e34d7c56e
  }
`;

module.exports = typeDefs;

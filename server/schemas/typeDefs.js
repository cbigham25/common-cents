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
    budgets: [Budget]! 
  }

  type Expense {
    _id: ID
    amount: Float!
    category: String
    createdAt: String
    user: User
  }

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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!)
    expenses(username: String, category: String, month: Int)
    expense(expenseId: ID!)
    me: User
    budgets: [Budget] 
  }

  type Mutation {
    addUser(username: String!, password: String!)
    login(username: String!, password: String!)
    addExpense(amount: Float!, category: String)
    removeExpense(expenseId: ID!): Expense
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
  }
`;

module.exports = typeDefs;

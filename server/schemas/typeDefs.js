const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expenses: [Expense]!
  }

  type Expense {
    _id: ID
    amount: Float!
    category: String
    createdAt: String
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    expenses(username: String): [Expense]
    expense(expenseId: ID!): Expense
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addExpense(amount: Float!, category: String): Expense
    removeExpense(expenseId: ID!): Expense
  }
`;

module.exports = typeDefs;

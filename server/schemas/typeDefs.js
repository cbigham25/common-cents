const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    expenses: [Expense]!
    incomes: [Income]!
  }

  type Expense {
    _id: ID
    amount: Float!
    category: String
    createdAt: String
    month: String
    user: User
  }

  type Income {
    _id: ID
    amount: Float
    category: String
    createdAt: String
    month: String
    user: User
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    expenses(username: String, category: String, month: String): [Expense] 
    expense(expenseId: ID!): Expense
    incomes(username: String, category: String, month:  String): [Income] 
    income(incomeId: ID!): Income
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addExpense(amount: Float!, category: String!, username: String!, month: String!): Expense
    removeExpense(expenseId: ID!): Expense
    addIncome(amount: Float!, category: String, username: String!, month: String!): Income
    removeIncome(incomeId: ID!): Income
  }
`;

module.exports = typeDefs;

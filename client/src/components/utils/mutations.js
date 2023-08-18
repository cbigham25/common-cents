import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

const ADD_EXPENSE = gql`
  mutation addExpense($amount: Float!, $category: String!, $username: String!) {
    addExpense(amount: $amount, category: $category, username: $username) {
      _id
      amount
      category
      user {
        username
      }
    }
  }
`;




export { LOGIN_USER, ADD_USER, ADD_EXPENSE };
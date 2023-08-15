import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query($username: String!) {
  user(username: $username) {
    _id
    username
    expenses {
      _id
      amount
      category
      createdAt
    }
  }
}
`;

export const QUERY_EXPENSES = gql`
query Query($username: String, $category: String) {
  expenses(username: $username, category: $category) {
    _id
    amount
    category
  }
}
`;





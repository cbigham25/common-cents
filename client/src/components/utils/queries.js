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
      month
    }
    incomes {
      _id
      amount
      category
      createdAt
      month
    }
  }
}
`;









import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries.js';
import Auth from '../utils/auth'

const BudgetForm = () => {
  const username = Auth.getProfile().data.username;
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: username }
  });
  

  if (loading) {
    return <div>Loading...</div>;
  }


  const userExpenses = data?.user?.expenses;
  const totalExpenses = userExpenses?.reduce((acc, expense) => acc + expense.amount, 0) || 0;


  return (
    <section className='budgetContainer'>
      <h1>Hello, {Auth.getProfile().data.username}</h1>
      <p>Your total expenses: {totalExpenses}</p>
    </section>
  );
};

export default BudgetForm;

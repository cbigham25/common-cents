import React, { useState } from "react";
import './budget.css';
import React, { useState, useEffect } from "react";
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

  const aggregateExpensesByCategory = (expenses) => {
    return expenses.reduce((acc, expense) => {
      if (acc[expense.category]) {
        acc[expense.category] += expense.amount;
      } else {
        acc[expense.category] = expense.amount;
      }
      return acc;
    }, {});
  }

  const expenses = data?.user?.expenses;

  let aggregatedExpenses = 0;

  if (expenses) {
    aggregatedExpenses = aggregateExpensesByCategory(expenses);
  }

  console.log(aggregatedExpenses);


  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <section className='budgetContainer'>
            <h1>Hello, {Auth.getProfile().data.username}</h1>
            <p>Your total expenses: {totalExpenses}</p>
            <section className="needsContainer">
              <h2>Needs</h2>
              <p>Rent: {aggregatedExpenses.Rent || 0}</p>
              <p>Utilities:{aggregatedExpenses.Utilities || 0}</p>
              <p>Taxes: {aggregatedExpenses.Taxes || 0}</p>
              <p>Insurance: {aggregatedExpenses.Insurance || 0}</p>
              <p>Bills: {aggregatedExpenses.Bills || 0}</p>
              <p>Health: {aggregatedExpenses.Health || 0}</p>
              <p>Groceries: {aggregatedExpenses.Groceries || 0}</p>
              <p>Debt: {aggregatedExpenses.Debt || 0}</p>
              <p>Other: {aggregatedExpenses.OtherNeeds || 0}</p>
            </section>
            <section className="wantsContainer">
              <h2>Wants</h2>
              <p>Dining: {aggregatedExpenses.Dining || 0}</p>
              <p>Fun: {aggregatedExpenses.Fun || 0}</p>
              <p>Products: {aggregatedExpenses.Products || 0}</p>
              <p>Clothing: {aggregatedExpenses.Clothing || 0}</p>
              <p>Vacation: {aggregatedExpenses.Vacation || 0}</p>
              <p>Other: {aggregatedExpenses.OtherWants || 0}</p>
            </section>
          </section>
        </>) : (
        <p>Please login to or create your account from the links above! </p>
      )
      }
    </div>
  );
};

export default BudgetForm;
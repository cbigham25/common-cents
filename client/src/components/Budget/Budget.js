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

  const userIncomes = data?.user?.incomes;
  const totalIncome = userIncomes?.reduce((acc, income) => acc + income.amount, 0) || 0;

  console.log(data?.user)
  console.log(data?.user?.incomes)

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

  const revealEl = (id) => {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <section className='budgetContainer'>
            <h1>Hello, {Auth.getProfile().data.username}</h1>
 <p>Total Spent / Monthly Income {totalExpenses} / {totalIncome}</p>
            <button onClick={() => revealEl("addExpense")}>Add Expense</button>
            <div id="addExpense" style={{ display: "none" }}>
              <form>
                <div>
                  <select name="expenses" id="expenses">
                  <option value="rent">
                      Rent
                    </option>
                    <option value="Utilities">
                      Utilities
                    </option>
                    <option value="Taxes">
                      Taxes
                    </option>
                    <option value="Insurance">
                      Insurance
                    </option>
                    <option value="Bills">
                      Bills
                    </option>
                    <option value="Health">
                      Health
                    </option>
                    <option value="Groceries">
                      Groceries
                    </option>
                    <option value="Debt">
                      Debt
                    </option>
                    <option value="Other">
                      Other
                    </option>
                    <option value="Dining">
                      Dining
                    </option>
                    <option value="Fun">
                      Fun
                    </option>
                    <option value="Products">
                      Products
                    </option>
                    <option value="rent">
                      rent
                    </option>
                    <option value="Clothing">
                      Clothing
                    </option>
                    <option value="Vacation">
                      Vacation
                    </option>
                  </select>
                  <input id="expenseInput" type="number" placeholder="0.00" min={"0"} required /><span class="validity"></span>  <div>
                    <input type="submit" />
                  </div>
                </div>
              </form>

            </div>
            <button onClick={() => revealEl("addIncome")}>Add Income</button>
            <div id="addIncome" style={{ display: "none" }}>
              <div>
                <form>
                  <input id="incomeInput" type="number" placeholder="0.00" min={"0"} required />
                  <span class="validity"></span>
                  <div>
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
=======
           

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
    </div >
  );
};

export default BudgetForm;

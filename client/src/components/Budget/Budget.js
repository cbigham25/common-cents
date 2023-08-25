import './budget.css';
import React from "react";
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries.js';
import { ADD_EXPENSE, ADD_INCOME } from "../utils/mutations.js";
import Auth from '../utils/auth'
import './budget.css'

const BudgetForm = () => {

  const username = Auth.getProfile().data.username;

  const [addExpense, { error }] = useMutation(ADD_EXPENSE);
  const [addIncome, { error: incomeError }] = useMutation(ADD_INCOME);


  const handleExpenseSubmit = async (event) => {
    event.preventDefault();

    const expenseAmount = parseFloat(document.getElementById('expenseInput').value);
    const expenseCategory = document.getElementById('expenses').value;

    try {
      const { data } = await addExpense({
        variables: {
          // assuming your mutation requires an amount and category. Adjust accordingly.
          amount: expenseAmount,
          category: expenseCategory,
          username: username
        }
      });

      refetch();

    } catch (err) {
      console.error(err);
      // Handle the error as needed.
    }
  };

  const handleIncomeSubmit = async (event) => {
    event.preventDefault();

    const incomeAmount = parseFloat(document.getElementById('incomeInput').value);

    try {
      const { data } = await addIncome({
        variables: {
          category: "Income",
          amount: incomeAmount,
          username: username
        }
      });

      refetch();

    } catch (err) {
      console.error(err);
    }
  };



  const { loading, data, refetch } = useQuery(QUERY_USER, {
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

  const NEEDS_CATEGORIES = ["Rent", "Utilities", "Taxes", "Insurance", "Bills", "Health", "Groceries", "Debt", "OtherNeeds"];
  const WANTS_CATEGORIES = ["Dining", "Fun", "Products", "Clothing", "Vacation", "OtherWants"];

  const getTotalForCategories = (aggregatedExpenses, categories) => {
    return categories.reduce((total, category) => {
      return total + (aggregatedExpenses[category] || 0);
    }, 0);
  };

  const needsTotal = getTotalForCategories(aggregatedExpenses, NEEDS_CATEGORIES);
  const wantsTotal = getTotalForCategories(aggregatedExpenses, WANTS_CATEGORIES);


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
            <div className='addValueButtonContainer'>
              <button className='addExpenseButton' onClick={() => revealEl("addExpense")}>Add Expense</button>
              <button className='addIncomeButton' onClick={() => revealEl("addIncome")}>Add Income</button>
            </div>
            <div id="addExpense" style={{ display: "none" }}>
              <form onSubmit={handleExpenseSubmit}>
                <div>
                  <select name="expenses" id="expenses">
                    <option value="Rent">
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
                    <option value="Clothing">
                      Clothing
                    </option>
                    <option value="Vacation">
                      Vacation
                    </option>
                  </select>
                  <input id="expenseInput" type="float" placeholder="0.00" min={"0"} required /><span className="validity"></span>  <div>
                    <input type="submit" />
                  </div>
                </div>
              </form>
            </div>
            <div id="addIncome" style={{ display: "none" }}>
              <div>
                <form onSubmit={handleIncomeSubmit}>
                  <input id="incomeInput" type="float" placeholder="0.00" min={"0"} required />
                  <span className="validity"></span>
                  <div>
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
            <section className="needsContainer">
              <h2>Needs {needsTotal} / {totalIncome * 0.7}</h2>
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
              <h2>Wants {wantsTotal} / {totalIncome * 0.3}</h2>
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
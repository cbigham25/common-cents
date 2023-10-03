import './budget.css';
import React, { useContext, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries.js';
import { ADD_EXPENSE, ADD_INCOME } from "../utils/mutations.js";
import Auth from '../utils/auth'
import PieChart from '../Chart/PieChart';
import { DateContext } from '../../App';
import { Link } from 'react-router-dom';
import Landing from '../Landing/Landing';



const BudgetForm = () => {

  const username = Auth.getProfile().data.username;

  const [addExpense, { error }] = useMutation(ADD_EXPENSE);
  const [addIncome, { error: incomeError }] = useMutation(ADD_INCOME);

  const { selectedDate } = useContext(DateContext);

  useEffect(() => {
    refetch();
  }, [selectedDate]);

  let selectedMonth = `${selectedDate.month}${selectedDate.year}`

  const handleExpenseSubmit = async (event) => {
    event.preventDefault();

    const expenseAmount = parseFloat(document.getElementById('expenseInput').value);
    const expenseCategory = document.getElementById('expenses').value;

    try {
      const { data } = await addExpense({
        variables: {
          amount: expenseAmount,
          category: expenseCategory,
          username: username,
          month: selectedMonth
        }
      });

      if (data) {
        document.getElementById('expenseInput').value = '';
        const expenseConfirmation = document.getElementById('expenseConfirmation');
        expenseConfirmation.classList.remove('hidden');
        expenseConfirmation.classList.add('visible');
        setTimeout(() => {
          expenseConfirmation.classList.remove('visible');
          expenseConfirmation.classList.add('hidden');
        }, 3000);
      }

      refetch();

    } catch (err) {
      console.error(err);
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
          username: username,
          month: selectedMonth
        }
      });


      if (data) {
        document.getElementById('incomeInput').value = '';
        const incomeConfirmation = document.getElementById('incomeConfirmation');
        incomeConfirmation.classList.remove('hidden');
        incomeConfirmation.classList.add('visible');
        setTimeout(() => {
          incomeConfirmation.classList.remove('visible');
          incomeConfirmation.classList.add('hidden');
        }, 3000);
      }

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


  const expenses = data?.user?.expenses.filter(expense => expense.month === selectedMonth) || [];

  const userExpenses = data?.user?.expenses.filter(expense => expense.month === selectedMonth) || [];
  console.log(userExpenses)
  const totalExpenses = userExpenses?.reduce((acc, expense) => acc + expense.amount, 0) || 0;

  const userIncomes = data?.user?.incomes.filter(income => income.month === selectedMonth) || [];
  const totalIncome = userIncomes?.reduce((acc, income) => acc + income.amount, 0) || 0;


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

  let aggregatedExpenses = 0;

  if (expenses) {
    aggregatedExpenses = aggregateExpensesByCategory(expenses);
  }


  const NEEDS_CATEGORIES = ["Rent", "Utilities", "Taxes", "Insurance", "Bills", "Health", "Groceries", "Debt", "OtherNeeds"];
  const WANTS_CATEGORIES = ["Dining", "Fun", "Products", "Clothing", "Vacation", "OtherWants"];

  const getTotalForCategories = (aggregatedExpenses, categories) => {
    return categories.reduce((total, category) => {
      return total + (aggregatedExpenses[category] || 0);
    }, 0);
  };

  const needsTotal = getTotalForCategories(aggregatedExpenses, NEEDS_CATEGORIES);
  const wantsTotal = getTotalForCategories(aggregatedExpenses, WANTS_CATEGORIES);


  const revealEl = (idToShow, idToHide) => {
    const elToShow = document.getElementById(idToShow);
    const elToHide = document.getElementById(idToHide);

    if (elToShow.style.display === "none") {
      elToShow.style.display = "block";
      elToHide.style.display = "none";
    } else {
      elToShow.style.display = "none";
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
              <button className='addExpenseButton' onClick={() => revealEl("addExpense", "addIncome")}>Add Expense</button>
              <button className='addIncomeButton' onClick={() => revealEl("addIncome", "addExpense")}>Add Income</button>
              <Link to="/history" className='historyButton'>
                See History
              </Link>
            </div>
            <div id="addExpense" style={{ display: "none" }}>
              <form onSubmit={handleExpenseSubmit}>
                <div className='addExpenseFormContainer'>
                  <p><b>Add Expense</b></p>
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
                    <p id="expenseConfirmation" className='confirmationText hidden'>Expense Added</p>
                  </div>
                </div>
              </form>
            </div>
            <div id="addIncome" style={{ display: "none" }}>
              <div>
                <form onSubmit={handleIncomeSubmit}>
                  <p><b>Add Income</b></p>
                  <input id="incomeInput" type="float" placeholder="0.00" min={"0"} required />
                  <span className="validity"></span>
                  <div>
                    <input type="submit" />
                    <p id='incomeConfirmation' className='confirmationText hidden'>Income Added</p>
                  </div>
                </form>
              </div>
            </div>
            <section className='budgetContent'>
              <section className='budgetTiles budgetContentChild'>
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
              <section className='graph budgetContentChild'>
                {userExpenses.length === 0 ? (
                  <p>No Expense Data</p>
                ) : (
                  <PieChart aggregatedExpenses={aggregatedExpenses} />
                )}
              </section>
            </section>
          </section>
        </>) : (
        <Landing />
      )
      }
    </div >
  );
};

export default BudgetForm;
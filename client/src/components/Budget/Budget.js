import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_EXPENSES } from '../utils/queries.js';
import Auth from '../utils/auth'

const BudgetForm = () => {
  const username = Auth.getProfile().data.username;
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: username }
  });

  const [categoryTotals, setCategoryTotals] = useState({});


  const categoryArray = [
    "Rent",
    "Utilities",
    "Taxes",
    "Insurance",
    "Bills",
    "Health",
    "Groceries",
    "Debt",
    "OtherWants",  // To differentiate from "Other" under "Wants"
    "Dining",
    "Fun",
    "Products",
    "Clothing",
    "Vacation",
    "OtherNeeds"   // To differentiate from "Other" under "Needs"
  ];

  useEffect(() => {
    if (!loading) {
      categoryArray.forEach(category => {
        const { data: categoryData } = useQuery(QUERY_EXPENSES, {
          variables: { username: username, category: category }
        });

        const categoryExpenses = categoryData?.expenses || [];
        const categoryTotal = categoryExpenses.reduce((acc, expense) => acc + expense.amount, 0);
        setCategoryTotals(prevTotals => ({ ...prevTotals, [category]: categoryTotal }));
      });
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }


  const userExpenses = data?.user?.expenses;
  const totalExpenses = userExpenses?.reduce((acc, expense) => acc + expense.amount, 0) || 0;


  return (
    <section className='budgetContainer'>
      <h1>Hello, {Auth.getProfile().data.username}</h1>
      <p>Your total expenses: {totalExpenses}</p>
      <section className="needsContainer">
        <h2>Needs</h2>
        <p>Rent: {categoryTotals.Rent || 0}</p>
        <p>Utilities: {categoryTotals.Utilities || 0}</p>
        <p>Taxes: {categoryTotals.Taxes || 0}</p>
        <p>Insurance: {categoryTotals.Insurance || 0}</p>
        <p>Bills: {categoryTotals.Bills || 0}</p>
        <p>Health: {categoryTotals.Health || 0}</p>
        <p>Groceries: {categoryTotals.Groceries || 0}</p>
        <p>Debt: {categoryTotals.Debt || 0}</p>
        <p>Other: {categoryTotals.OtherNeeds || 0}</p>
      </section>
      <section className="wantsContainer">
        <h2>Wants</h2>
        <p>Dining: {categoryTotals.Dining || 0}</p>
        <p>Fun: {categoryTotals.Fun || 0}</p>
        <p>Products: {categoryTotals.Products || 0}</p>
        <p>Clothing: {categoryTotals.Clothing || 0}</p>
        <p>Vacation: {categoryTotals.Vacation || 0}</p>
        <p>Other: {categoryTotals.OtherWants || 0}</p>
      </section>
    </section>
  );
};

export default BudgetForm;

import React from "react"; //The budget.js and editBudget.js codes may need some changes for functionality
import { useState, useEffect } from 'react';

const EditBudget = ({ budget, onUpdate }) => {
  const [budgetName, setBudgetName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (budget) {
      setBudgetName(budget.name);
      setAmount(budget.amount.toString());
    }
  }, [budget]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budgetName && amount) {
      onUpdate({ id: budget.id, name: budgetName, amount: parseFloat(amount) }); // parseFloat is for decimal points
    }
  };

  return (
    <div>
      <h2>Edit Budget</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Budget Name:</label>
          <input type="text" value={budgetName} onChange={(e) => setBudgetName(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Update Budget</button>
      </form>
    </div>
  );
};

export default EditBudget;
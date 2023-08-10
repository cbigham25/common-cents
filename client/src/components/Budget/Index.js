import React from "react";
import Auth from "../utils/auth";
import { useState } from 'react';

const BudgetForm = ({ onSubmit }) => {
  const [budgetName, setBudgetName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budgetName && amount) {
      onSubmit({ name: budgetName, amount });
      setBudgetName('');
      setAmount('');
    }
  };

  return (
    <div>
      <h2>Create New Budget</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Budget Name:</label>
          <input type="text" value={budgetName} onChange={(e) => setBudgetName(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Create Budget</button>
      </form>
    </div>
  );
};

export default BudgetForm;

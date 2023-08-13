import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBudget = ({ budget, onUpdate }) => {
  const [budgetName, setBudgetName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedNeed, setSelectedNeed] = useState('');
  const [needAmounts, setNeedAmounts] = useState({});

  const needsList = ['Groceries', 'Gas', 'Debt', 'Rent', 'Bills', 'Other'];

  useEffect(() => {
    if (budget) {
      setBudgetName(budget.name);
      setAmount(budget.amount.toString());
      setSelectedNeed(budget.need);
      setNeedAmounts(budget.needAmounts);
    }
  }, [budget]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedBudget = {
        id: budget._id,
        name: budgetName,
        amount: parseFloat(amount),
        need: selectedNeed,
        needAmounts: { ...needAmounts }
      };

      await axios.put(`/api/budgets/${budget._id}`, updatedBudget); // We need our endpoint here
      onUpdate(updatedBudget); 
    } catch (error) {
      console.error('Error updating budget:', error);
    }
  };

  return (
    <div>
      <h2>Edit Budget</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Budget Name:</label>
          <input type="text" value={budgetName} onChange={(e) => setBudgetName(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <label>Need:</label>
          <select value={selectedNeed} onChange={(e) => setSelectedNeed(e.target.value)}>
            <option value="">Select a Need</option>
            {needsList.map((need) => (
              <option key={need} value={need}>{need}</option>
            ))}
          </select>
        </div>
        {selectedNeed && (
          <div>
            <label>Need Amount:</label>
            <input
              type="number"
              value={needAmounts[selectedNeed] || ''}
              onChange={(e) => setNeedAmounts({ ...needAmounts, [selectedNeed]: e.target.value })}
            />
          </div>
        )}
        <button type="submit">Update Budget</button>
      </form>
    </div>
  );
};

export default EditBudget;

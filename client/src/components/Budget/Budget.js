import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axios helps with GET, POST, PUT, DELETE requests instead of having to write it all out


const Budget = () => {
  const [editingBudget, setEditingBudget] = useState(null);
  const [budgets, setBudgets] = useState([]);
  const [budgetName, setBudgetName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedNeed, setSelectedNeed] = useState('');
  const [needAmounts, setNeedAmounts] = useState({});

  const needsList = ['Groceries', 'Gas', 'Debt', 'Rent', 'Bills', 'Other'];

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get('/api/budgets'); 
      setBudgets(response.data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };

  const handleEditingBudget = (budget) => {
    setEditingBudget(budget);
    setBudgetName(budget.name);
    setAmount(budget.amount);
  };

  const updateBudget = async (e) => {
    e.preventDefault();
    try {
      const updatedBudget = { id: editingBudget.id, name: budgetName, amount: amount, need: selectedNeed, needAmounts: { ...needAmounts } };
      await axios.put(`/api/budgets/${editingBudget.id}`, updatedBudget); 
      fetchBudgets();
      setEditingBudget(null);
      setBudgetName('');
      setAmount('');
      setSelectedNeed('');
      setNeedAmounts({});
    } catch (error) {
      console.error('Error updating budget:', error);
    }
  };

  return (
    <div>
      <h2>Budgets</h2>
      {budgets.map((budget) => (
        <div key={budget.id}>
          <p>Budget Name: {budget.name}</p>
          <p>Amount: {budget.amount}</p>
          <p>Need: {budget.need}</p>
          <p>Need Amounts:</p>
          <ul>
            {Object.entries(budget.needAmounts).map(([need, amount]) => (
              <li key={need}>{need}: {amount}</li>
            ))}
          </ul>
          <button onClick={() => handleEditingBudget(budget)}>Edit</button>
        </div>
      ))}

      {editingBudget && (
        <div>
          <h2>Edit Budget</h2>
          <form onSubmit={updateBudget}>
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
                <input type="number" value={needAmounts[selectedNeed] || ''} onChange={(e) => setNeedAmounts({ ...needAmounts, [selectedNeed]: e.target.value })} />
              </div>
            )}
            <button type="submit">Update Budget</button>
            <button onClick={() => setEditingBudget(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Budget;

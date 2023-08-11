import React, { useState } from "react";

const BudgetForm = ({ onSubmit }) => {
  const [budgetName, setBudgetName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedNeed, setSelectedNeed] = useState('Groceries');
  const [needsList] = useState([
    'Groceries',
    'Gas',
    'Debt',
    'Rent',
    'Bills',
    'Other'
  ]);
  const [needAmounts, setNeedAmounts] = useState({
    Groceries: '',
    Gas: '',
    Debt: '',
    Rent: '',
    Bills: '',
    Other: ''
  });

  const handleNeedAmountChange = (need, value) => {
    setNeedAmounts(prevAmounts => ({ ...prevAmounts, [need]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budgetName && amount && selectedNeed) {
      onSubmit({
        name: budgetName,
        amount,
        need: selectedNeed,
        needAmounts: { ...needAmounts }
      });
      setBudgetName('');
      setAmount('');
      setSelectedNeed('Groceries');
      setNeedAmounts({
        Groceries: '',
        Gas: '',
        Debt: '',
        Rent: '',
        Bills: '',
        Other: ''
      });
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
        <div>
          <label>Need:</label>
          <select value={selectedNeed} onChange={(e) => setSelectedNeed(e.target.value)}>
            {needsList.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Amount for {selectedNeed}:</label>
          <input
            type="number"
            value={needAmounts[selectedNeed]}
            onChange={(e) => handleNeedAmountChange(selectedNeed, e.target.value)}
          />
        </div>
        <button type="submit">Create Budget</button>
      </form>
    </div>
  );
};

export default BudgetForm;

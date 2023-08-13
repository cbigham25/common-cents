const Budget = require('../models/income'); 

const budgetController = {
  getBudgets: async (req, res) => {
    try {
      const budgets = await Budget.find();
      res.json(budgets);
    } catch (error) {
      console.error('Error fetching budgets:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateBudget: async (req, res) => {
    const { id } = req.params;
    const { name, amount, need, needAmounts } = req.body;

    try {
      const updatedBudget = await Budget.findByIdAndUpdate(
        id,
        { name, amount, need, needAmounts },
        { new: true } 
      );
      res.json(updatedBudget);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = budgetController;

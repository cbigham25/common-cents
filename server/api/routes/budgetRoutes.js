const router = require('express').Router();
const budgetController = require('../controllers/budgetController'); 

router.get('/budgets', budgetController.getBudgets); 
router.put('/budgets/:id', budgetController.updateBudget); 

module.exports = router;


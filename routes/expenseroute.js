const path = require('path');
const express = require('express');

const expenseController = require('../controllers/expenses');

const router = express.Router();

router.get('/get-expenses',expenseController.getExpenses);

router.post('/add-expense',expenseController.addExpense);

router.post('/delete-expense/:id',expenseController.deleteExpense);

router.post('/edit-expense/:id',expenseController.editExpense);


module.exports = router;
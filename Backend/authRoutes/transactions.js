const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// GET all transactions
router.get('/', transactionController.getAllTransactions);

// POST a new transaction
router.post('/', transactionController.addTransaction);

// PUT to update a transaction
router.put('/:transaction_id', transactionController.updateTransaction);

// DELETE a transaction
router.delete('/:transaction_id', transactionController.deleteTransaction);

module.exports = router;

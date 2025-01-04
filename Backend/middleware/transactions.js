const transactionModel = require('../models/transactionModel');

// Fetch all transactions
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionModel.getAllTransactions();
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Add a new transaction
const addTransaction = async (req, res) => {
    const { user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp } = req.body;

    if (!user_id || !product_id || !supplier_id || !status || !order_date || !quantity || !transaction_type || !timestamp) {
        return res.status(400).json({ error: 'All fields are required: user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp' });
    }

    try {
        const transaction = await transactionModel.addTransaction({ user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp });
        res.status(201).json({ message: 'Transaction added successfully', transaction });
    } catch (error) {
        console.error('Error adding transaction:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// update a transaction
const updateTransaction = async (req, res) => {
    const { transaction_id } = req.params;
    const { user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp } = req.body;

    if (!user_id || !product_id || !supplier_id || !status || !order_date || !quantity || !transaction_type || !timestamp) {
        return res.status(400).json({ error: 'All fields are required: user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp' });
    }

    try {
        const isUpdated = await transactionModel.updateTransaction(transaction_id, { user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp });
        if (!isUpdated) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction updated successfully' });
    } catch (error) {
        console.error('Error updating transaction:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
    const { transaction_id } = req.params;

    try {
        const isDeleted = await transactionModel.deleteTransaction(transaction_id);
        if (!isDeleted) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        console.error('Error deleting transaction:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
};

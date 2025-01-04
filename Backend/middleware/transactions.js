const db = require('../config/database');  // Assuming database connection is set up in config/database.js

// Fetch all transactions
const getAllTransactions = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM transactions');
        return rows;
    } catch (error) {
        throw new Error('Error fetching transactions: ' + error.message);
    }
};

// Add a new transaction
const addTransaction = async (transaction) => {
    const { user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp } = transaction;
    try {
        const query = 'INSERT INTO transactions (user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const [result] = await db.query(query, [user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp]);
        return { transaction_id: result.insertId, ...transaction };
    } catch (error) {
        throw new Error('Error adding transaction: ' + error.message);
    }
};

// Update a transaction
const updateTransaction = async (transaction_id, transaction) => {
    const { user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp } = transaction;
    try {
        const query = 'UPDATE transactions SET user_id = ?, product_id = ?, supplier_id = ?, status = ?, order_date = ?, quantity = ?, transaction_type = ?, timestamp = ? WHERE transaction_id = ?';
        const [result] = await db.query(query, [user_id, product_id, supplier_id, status, order_date, quantity, transaction_type, timestamp, transaction_id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error updating transaction: ' + error.message);
    }
};

// Delete a transaction
const deleteTransaction = async (transaction_id) => {
    try {
        const query = 'DELETE FROM transactions WHERE transaction_id = ?';
        const [result] = await db.query(query, [transaction_id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error deleting transaction: ' + error.message);
    }
};

module.exports = {
    getAllTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
};

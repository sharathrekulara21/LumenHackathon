const db = require('../config/database');  

//Fetch all suppliers
const getAllSuppliers = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM suppliers');
        return rows;
    } catch (error) {
        throw new Error('Error fetching suppliers: ' + error.message);
    }
};

// Add a new supplier
const addSupplier = async (supplier) => {
    const { sup_name, sup_mail, sup_contact } = supplier;
    try {
        const query = 'INSERT INTO suppliers (sup_name, sup_mail, sup_contact) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [sup_name, sup_mail, sup_contact]);
        return { sup_id: result.insertId, ...supplier };
    } catch (error) {
        throw new Error('Error adding supplier: ' + error.message);
    }
};

// Update a supplier
const updateSupplier = async (sup_id, supplier) => {
    const { sup_name, sup_mail, sup_contact } = supplier;
    try {
        const query = 'UPDATE suppliers SET sup_name = ?, sup_mail = ?, sup_contact = ? WHERE sup_id = ?';
        const [result] = await db.query(query, [sup_name, sup_mail, sup_contact, sup_id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error updating supplier: ' + error.message);
    }
};

// Delete a supplier
const deleteSupplier = async (sup_id) => {
    try {
        const query = 'DELETE FROM suppliers WHERE sup_id = ?';
        const [result] = await db.query(query, [sup_id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error deleting supplier: ' + error.message);
    }
};

module.exports = {
    getAllSuppliers,
    addSupplier,
    updateSupplier,
    deleteSupplier,
};

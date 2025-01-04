const supplierModel = require('../middleware/supplierModel');

//  Fetch all suppliers
const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await supplierModel.getAllSuppliers();
        res.status(200).json(suppliers);
    } catch (error) {
        console.error('Error fetching suppliers:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Add a new supplier
const addSupplier = async (req, res) => {
    const { sup_name, sup_mail, sup_contact } = req.body;

    if (!sup_name || !sup_mail || !sup_contact) {
        return res.status(400).json({ error: 'All fields are required: sup_name, sup_mail, sup_contact' });
    }

    try {
        const supplier = await supplierModel.addSupplier({ sup_name, sup_mail, sup_contact });
        res.status(201).json({ message: 'Supplier added successfully', supplier });
    } catch (error) {
        console.error('Error adding supplier:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//  Update a supplier
const updateSupplier = async (req, res) => {
    const { sup_id } = req.params;
    const { sup_name, sup_mail, sup_contact } = req.body;

    if (!sup_name || !sup_mail || !sup_contact) {
        return res.status(400).json({ error: 'All fields are required: sup_name, sup_mail, sup_contact' });
    }

    try {
        const isUpdated = await supplierModel.updateSupplier(sup_id, { sup_name, sup_mail, sup_contact });
        if (!isUpdated) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.status(200).json({ message: 'Supplier updated successfully' });
    } catch (error) {
        console.error('Error updating supplier:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a supplier
const deleteSupplier = async (req, res) => {
    const { sup_id } = req.params;

    try {
        const isDeleted = await supplierModel.deleteSupplier(sup_id);
        if (!isDeleted) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        console.error('Error deleting supplier:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllSuppliers,
    addSupplier,
    updateSupplier,
    deleteSupplier,
};

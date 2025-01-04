const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// GET all suppliers
router.get('/', supplierController.getAllSuppliers);

// POST a new supplier
router.post('/', supplierController.addSupplier);

// PUT to update a supplier
router.put('/:sup_id', supplierController.updateSupplier);

// DELETE a supplier
router.delete('/:sup_id', supplierController.deleteSupplier);

module.exports = router;

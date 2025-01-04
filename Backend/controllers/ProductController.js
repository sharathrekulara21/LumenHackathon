const db = require('../db'); // MySQL connection
const ProductDTO = require('../models/productDTO'); // Product DTO

// Get all products
exports.getProducts = (req, res) => {
  db.execute('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to fetch products', error: err.message });
    }

    // Map the results to ProductDTO
    const products = results.map(row => new ProductDTO(
      row.id,
      row.name,
      row.category,
      row.supplier_name,
      row.stock_level,
      row.reorder_point
    ));

    res.status(200).json(products);
  });
};

// Add a new product (Admin only)
exports.addProduct = (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }

  const { name, category, supplier_name, stock_level, reorder_point } = req.body;
  
  const query = `
    INSERT INTO products (name, category, supplier_name, stock_level, reorder_point)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  db.execute(query, [name, category, supplier_name, stock_level, reorder_point], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to create product', error: err.message });
    }

    // Map the newly created product to ProductDTO
    const product = new ProductDTO(
      results.insertId, // Assuming the database returns the inserted ID
      name,
      category,
      supplier_name,
      stock_level,
      reorder_point
    );

    res.status(201).json({ message: 'Product created successfully', product });
  });
};

// Update product details
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, category, supplier_name, stock_level, reorder_point } = req.body;

  const query = `
    UPDATE products 
    SET name = ?, category = ?, supplier_name = ?, stock_level = ?, reorder_point = ? 
    WHERE id = ?
  `;

  db.execute(query, [name, category, supplier_name, stock_level, reorder_point, id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to update product', error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Map the updated product to ProductDTO
    const product = new ProductDTO(
      id, // Use the same ID from the request params
      name,
      category,
      supplier_name,
      stock_level,
      reorder_point
    );

    res.status(200).json({ message: 'Product updated successfully', product });
  });
};

// Delete a product (Admin only)
exports.deleteProduct = (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }

  const { id } = req.params;

  const query = 'DELETE FROM products WHERE id = ?';

  db.execute(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to delete product', error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  });
};

const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const authMiddleware = require("../middleware/authMiddleware"); // Auth middleware for role-based access

// GET /products - Get all products
router.get("/", authMiddleware, ProductController.getProducts);

// POST /products - Add a new product (Admin only)
router.post("/", authMiddleware, ProductController.addProduct);

// PUT /products/:id - Update product details
router.put("/:id", authMiddleware, ProductController.updateProduct);

// DELETE /products/:id - Delete a product (Admin only)
router.delete("/:id", authMiddleware, ProductController.deleteProduct);

module.exports = router;

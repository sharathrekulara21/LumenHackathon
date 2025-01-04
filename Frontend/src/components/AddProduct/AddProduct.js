import React, { useState } from 'react';

const AddProduct = ({ onSaveProduct, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    category: '',
    modelNumber: '',
    serialNumber: '',
    stockLevel: 0,
    reorderPoint: 0,
    supplierName: '',
    supplierEmail: '',
    supplierContact: '',
    orderDate: '',
    quantity: 0,
    orderStatus: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProduct(formData); // Save the new product
  };

  return (
    <div className="add-product-form">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <label>Model Number:</label>
        <input
          type="text"
          name="modelNumber"
          value={formData.modelNumber}
          onChange={handleChange}
        />
        <label>Serial Number:</label>
        <input
          type="text"
          name="serialNumber"
          value={formData.serialNumber}
          onChange={handleChange}
        />
        <label>Stock Level:</label>
        <input
          type="number"
          name="stockLevel"
          value={formData.stockLevel}
          onChange={handleChange}
        />
        <label>Reorder Point:</label>
        <input
          type="number"
          name="reorderPoint"
          value={formData.reorderPoint}
          onChange={handleChange}
        />
        <label>Supplier Name:</label>
        <input
          type="text"
          name="supplierName"
          value={formData.supplierName}
          onChange={handleChange}
        />
        <label>Supplier Email:</label>
        <input
          type="email"
          name="supplierEmail"
          value={formData.supplierEmail}
          onChange={handleChange}
        />
        <label>Supplier Contact:</label>
        <input
          type="text"
          name="supplierContact"
          value={formData.supplierContact}
          onChange={handleChange}
        />
        <label>Order Date:</label>
        <input
          type="date"
          name="orderDate"
          value={formData.orderDate}
          onChange={handleChange}
        />
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <label>Order Status:</label>
        <input
          type="text"
          name="orderStatus"
          value={formData.orderStatus}
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit">Save Product</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

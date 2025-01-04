import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  const product = {
    name: 'HP 5406zl',
    description: 'HP ProCurve Switch 5406zl',
    image: 'https://via.placeholder.com/150', // Placeholder image
    category: 'Switch',
    modelNumber: 'ABC456',
    serialNumber: '7edc108e-45e0-4997-bc59-17852d16b689',
    stockLevel: 300,
    reorderPoint: 100,
    supplierName: 'HP',
    supplierEmail: 'abhp@mail.com',
    supplierContact: '1980762345',
    orderDate: '11/5/2023',
    quantity: 300,
    orderStatus: 'Delivered'
  };

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <table>
        <tbody>
          <tr><th>Category</th><td>{product.category}</td></tr>
          <tr><th>Model Number</th><td>{product.modelNumber}</td></tr>
          <tr><th>Serial Number</th><td>{product.serialNumber}</td></tr>
          <tr><th>Stock Level</th><td>{product.stockLevel}</td></tr>
          <tr><th>Reorder Point</th><td>{product.reorderPoint}</td></tr>
          <tr><th>Supplier Name</th><td>{product.supplierName}</td></tr>
          <tr><th>Supplier Email</th><td>{product.supplierEmail}</td></tr>
          <tr><th>Supplier Contact</th><td>{product.supplierContact}</td></tr>
          <tr><th>Order Date</th><td>{product.orderDate}</td></tr>
          <tr><th>Quantity</th><td>{product.quantity}</td></tr>
          <tr><th>Order Status</th><td>{product.orderStatus}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;

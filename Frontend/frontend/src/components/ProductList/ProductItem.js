import React from 'react';
import './ProductList.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Stock Level: {product.stockLevel}</p>
      <p>Status: {product.orderStatus}</p>
    </div>
  );
}

export default ProductItem;

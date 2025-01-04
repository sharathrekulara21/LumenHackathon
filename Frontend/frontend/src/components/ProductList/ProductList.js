import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'HP 5406zl',
      description: 'HP ProCurve Switch 5406zl',
      image: 'https://via.placeholder.com/150',
      category: 'Switch',
      stockLevel: 300,
      modelNumber: 'ABC456',
      serialNumber: '7edc108e-45e0-4997-bc59-17852d16b689',
      supplierName: 'HP',
      orderStatus: 'Delivered'
    },
    {
      id: 2,
      name: 'Product Example 2',
      description: 'Another product description',
      image: 'https://via.placeholder.com/150',
      category: 'Networking',
      stockLevel: 150,
      modelNumber: 'DEF789',
      serialNumber: 'a9b8c7d6e5f4',
      supplierName: 'Supplier Name',
      orderStatus: 'Pending'
    }
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

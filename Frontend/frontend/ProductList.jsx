import React, { useState } from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', category: 'Electronics', stock: 10 },
    { id: 2, name: 'Product 2', category: 'Clothing', stock: 0 },
    { id: 3, name: 'Product 3', category: 'Electronics', stock: 5 },
    { id: 4, name: 'Product 4', category: 'Clothing', stock: 2 },
    { id: 5, name: 'Product 5', category: 'Furniture', stock: 0 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStock, setFilterStock] = useState('all'); // All, Low, Out of stock
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStockFilterChange = (event) => {
    setFilterStock(event.target.value);
  };

  const filterProducts = () => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterStock !== 'all') {
      if (filterStock === 'low') {
        filtered = filtered.filter(product => product.stock > 0 && product.stock <= 5);
      } else if (filterStock === 'out') {
        filtered = filtered.filter(product => product.stock === 0);
      }
    }

    setFilteredProducts(filtered);
  };

  // Trigger filtering when search term or stock filter changes
  React.useEffect(() => {
    filterProducts();
  }, [searchTerm, filterStock]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products by name or category"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={filterStock} onChange={handleStockFilterChange}>
          <option value="all">All</option>
          <option value="low">Low stock</option>
          <option value="out">Out of stock</option>
        </select>
      </div>

      <div>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Stock: {product.stock > 0 ? product.stock : 'Out of stock'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;

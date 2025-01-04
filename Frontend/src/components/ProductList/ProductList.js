// import React from 'react';
// import './ProductList.css';

// const ProductList = ({ products, onSelectProduct }) => {
//   return (
//     <div className="product-list">
//       <h2>Product Inventory</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.serialNumber} onClick={() => onSelectProduct(product)}>
//             <h3>{product.name}</h3>
//             <p>{product.category} - Stock: {product.stockLevel}</p>
//             <p>Supplier: {product.supplierName} | Contact: {product.supplierContact}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onSelectProduct, onAddProduct }) => {
  return (
    <div className="product-list">
      <h2>Product Inventory</h2>
      <button className="add-product-btn" onClick={onAddProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.serialNumber} onClick={() => onSelectProduct(product)}>
            <h3>{product.name}</h3>
            <p>{product.category} - Stock: {product.stockLevel}</p>
            <p>Supplier: {product.supplierName} | Contact: {product.supplierContact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

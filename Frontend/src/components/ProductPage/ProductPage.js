// import React, { useState } from 'react';
// import './ProductPage.css';
// import Edit from './Edit'; // Importing the Edit component

// const ProductPage = ({ selectedProduct, onUpdateProduct }) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//   };

//   if (!selectedProduct) {
//     return (
//       <div className="product-page">
//         <h2>Select a product to view details</h2>
//       </div>
//     );
//   }

//   if (isEditing) {
//     return (
//       <Edit
//         product={selectedProduct}
//         onUpdateProduct={onUpdateProduct}
//         onCancelEdit={handleCancelEdit} // Pass cancel function to Edit
//       />
//     );
//   }

//   const {
//     name,
//     description,
//     image,
//     category,
//     modelNumber,
//     serialNumber,
//     stockLevel,
//     reorderPoint,
//     supplierName,
//     supplierEmail,
//     supplierContact,
//     orderDate,
//     quantity,
//     orderStatus,
//   } = selectedProduct;

//   return (
//     <div className="product-page">
//       <div className="edit-button" onClick={handleEditToggle}>
//         Edit
//       </div>
//       <h2>Product Details</h2>
//       <table className="product-table">
//         <tbody>
//           <tr><th>Product Name</th><td>{name}</td></tr>
//           <tr><th>Description</th><td>{description}</td></tr>
//           <tr>
//             <th>Product Image</th>
//             <td><img src={image || "https://via.placeholder.com/100"} alt={name} /></td>
//           </tr>
//           <tr><th>Category</th><td>{category}</td></tr>
//           <tr><th>Model Number</th><td>{modelNumber}</td></tr>
//           <tr><th>Serial Number</th><td>{serialNumber}</td></tr>
//           <tr><th>Stock Level</th><td>{stockLevel}</td></tr>
//           <tr><th>Reorder Point</th><td>{reorderPoint}</td></tr>
//           <tr><th>Supplier Name</th><td>{supplierName}</td></tr>
//           <tr><th>Supplier Email</th><td>{supplierEmail}</td></tr>
//           <tr><th>Supplier Contact</th><td>{supplierContact}</td></tr>
//           <tr><th>Order Date</th><td>{orderDate}</td></tr>
//           <tr><th>Quantity</th><td>{quantity}</td></tr>
//           <tr><th>Order Status</th><td>{orderStatus}</td></tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductPage;
import React, { useState } from 'react';
import './ProductPage.css';
import Edit from './Edit'; // Importing the Edit component

const ProductPage = ({ selectedProduct, onUpdateProduct }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (updatedProduct) => {
    onUpdateProduct(updatedProduct);
    setIsEditing(false);
  };

  if (!selectedProduct) {
    return (
      <div className="product-page">
        <h2>Select a product to view details</h2>
      </div>
    );
  }

  if (isEditing) {
    return (
      <Edit
        product={selectedProduct}
        onUpdateProduct={handleSaveEdit}
        onCancelEdit={handleCancelEdit} // Pass cancel function to Edit
      />
    );
  }

  const {
    name,
    description,
    image,
    category,
    modelNumber,
    serialNumber,
    stockLevel,
    reorderPoint,
    supplierName,
    supplierEmail,
    supplierContact,
    orderDate,
    quantity,
    orderStatus,
  } = selectedProduct;

  return (
    <div className="product-page">
      <div className="product-header">
        <h2>Product Details</h2>
        <div className="edit-button" onClick={handleEditToggle}>Edit</div>
      </div>
      <div className="product-info">
        <div className="product-image">
          <img src={image || "https://via.placeholder.com/100"} alt={name} />
        </div>
        <div className="product-description">
          <h3>{name}</h3>
          <p>{description}</p>
          <table className="product-table">
            <tbody>
              <tr><th>Category</th><td>{category}</td></tr>
              <tr><th>Model Number</th><td>{modelNumber}</td></tr>
              <tr><th>Serial Number</th><td>{serialNumber}</td></tr>
              <tr><th>Stock Level</th><td>{stockLevel}</td></tr>
              <tr><th>Reorder Point</th><td>{reorderPoint}</td></tr>
              <tr><th>Supplier Name</th><td>{supplierName}</td></tr>
              <tr><th>Supplier Email</th><td>{supplierEmail}</td></tr>
              <tr><th>Supplier Contact</th><td>{supplierContact}</td></tr>
              <tr><th>Order Date</th><td>{orderDate}</td></tr>
              <tr><th>Quantity</th><td>{quantity}</td></tr>
              <tr><th>Order Status</th><td>{orderStatus}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// import React, { useState } from 'react';
// import ProductPage from './components/ProductPage/ProductPage';
// import ProductList from './components/ProductList/ProductList';
// import Header from './components/Shared/Header';
// import Footer from './components/Shared/Footer';
// import './App.css';

// const App = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const initialProducts = [
//     {
//       name: 'HP 5406zl',
//       description: 'HP ProCurve Switch 5406zl',
//       image: 'https://via.placeholder.com/100',
//       category: 'Switch',
//       modelNumber: 'ABC456',
//       serialNumber: '7edc108e-45e0-4997-bc59-17852d16b689',
//       stockLevel: 300,
//       reorderPoint: 100,
//       supplierName: 'HP',
//       supplierEmail: 'abhp@mail.com',
//       supplierContact: '1980762345',
//       orderDate: '11/5/2023',
//       quantity: 300,
//       orderStatus: 'Delivered',
//     },
//     {
//       name: 'Linksys LGS318P',
//       description: 'Linksys 8-Port POE+ Switch',
//       image: 'https://via.placeholder.com/100',
//       category: 'Switch',
//       modelNumber: 'DEF789',
//       serialNumber: 'df1bc70f-b0e4-497f-b0d7-310b63e0e5bb',
//       stockLevel: 200,
//       reorderPoint: 50,
//       supplierName: 'Linksys',
//       supplierEmail: 'info@linksys.com',
//       supplierContact: '9876543210',
//       orderDate: '12/5/2023',
//       quantity: 200,
//       orderStatus: 'Pending',
//     }
//   ];

//   const [products, setProducts] = useState(initialProducts);

//   const handleUpdateProduct = (updatedProduct) => {
//     const updatedProducts = products.map(product => 
//       product.serialNumber === updatedProduct.serialNumber
//         ? { ...product, ...updatedProduct }
//         : product
//     );
//     setProducts(updatedProducts);
//     setSelectedProduct(updatedProduct);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <ProductList 
//         products={products} 
//         onSelectProduct={setSelectedProduct}
//       />
//       <ProductPage 
//         selectedProduct={selectedProduct} 
//         onUpdateProduct={handleUpdateProduct}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import ProductPage from './components/ProductPage/ProductPage';
import ProductList from './components/ProductList/ProductList';
import AddProduct from './components/AddProduct/AddProduct'; // Import the AddProduct component
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import './App.css';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false); // To track if the "Add Product" form is open
  const [products, setProducts] = useState([
    {
      name: 'HP 5406zl',
      description: 'HP ProCurve Switch 5406zl',
      image: 'https://via.placeholder.com/100',
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
      orderStatus: 'Delivered',
    },
    {
      name: 'Linksys LGS318P',
      description: 'Linksys 8-Port POE+ Switch',
      image: 'https://via.placeholder.com/100',
      category: 'Switch',
      modelNumber: 'DEF789',
      serialNumber: 'df1bc70f-b0e4-497f-b0d7-310b63e0e5bb',
      stockLevel: 200,
      reorderPoint: 50,
      supplierName: 'Linksys',
      supplierEmail: 'info@linksys.com',
      supplierContact: '9876543210',
      orderDate: '12/5/2023',
      quantity: 200,
      orderStatus: 'Pending',
    }
  ]);

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map(product => 
      product.serialNumber === updatedProduct.serialNumber
        ? { ...product, ...updatedProduct }
        : product
    );
    setProducts(updatedProducts);
    setSelectedProduct(updatedProduct);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, serialNumber: `${Date.now()}` }]);
    setIsAddingProduct(false); // Close the form after saving
  };

  return (
    <div className="App">
      <Header />
      <ProductList 
        products={products} 
        onSelectProduct={setSelectedProduct}
        onAddProduct={() => setIsAddingProduct(true)} // Open the "Add Product" form
      />
      {isAddingProduct && (
        <AddProduct 
          onSaveProduct={handleAddProduct} 
          onCancel={() => setIsAddingProduct(false)} // Close the form
        />
      )}
      <ProductPage 
        selectedProduct={selectedProduct} 
        onUpdateProduct={handleUpdateProduct}
      />
      <Footer />
    </div>
  );
};

export default App;

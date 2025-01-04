import React from 'react';
import ProductPage from './components/ProductPage/ProductPage';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;

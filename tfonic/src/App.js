import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Sidebar from './Sidebar';
import ProductsDisplay from './ProductsDisplay';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="container">
        <Sidebar />
        <ProductsDisplay />
      </div>
      <Footer />
    </div>
  );
}

export default App;

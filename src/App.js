import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';
import Homepage from './Components/Homepage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products/create" element={<ProductForm />} />
        <Route path="/products/edit/:id" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/" exact element={<ProductList />} />
        <Route path="/" element={<Homepage />} />

      </Routes>
    </Router>
  );
};

export default App;

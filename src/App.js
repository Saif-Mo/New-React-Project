import React from "react";
import Navbar from './Navbar';
import InfoSection from "./title";
import Cont from "./cont";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styling.css";
import Customer from "./customer";
import Products from "./Products";
import Product from "./Product";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Cont/><InfoSection/><Customer/></>} />
          <Route path="/info" element={<InfoSection/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product" element={<Product/>} />
          <Route path='/product/:id' element={<Product />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './App/Pages/About';
import Home from './App/Pages/Home'
import Item from './App/Pages/Item';
import Cart from './App/Pages/User/Cart';
import Checkout from './App/Pages/User/Checkout';
import Login from './App/Pages/User/Login';
import Signin from './App/Pages/User/Signin';

export default function ApplicationRouting() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sneakers/:slug" element={<Item />} />

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signin />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

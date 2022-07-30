import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './App/Pages/About';
import AddProducts from './App/Pages/Admin/AddProducts';
import Dashboard from './App/Pages/Admin/Dashboard';
import Home from './App/Pages/Home'
import Item from './App/Pages/Item';
import Products from './App/Pages/Products';
import Cart from './App/Pages/User/Cart';
import Checkout from './App/Pages/User/Checkout';
import Login from './App/Pages/User/Login';
import Signin from './App/Pages/User/Signin';
import Layout from './App/Components/Layout/Index';
import ScrollToTop from './App/Components/Layout/ScrollToTop';


export default function ApplicationRouting() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sneakers/:slug" element={<Item />} />
          <Route path="/products" element={<Products />} />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signin />} />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="/user/checkout" element={<Checkout />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/addproduct" element={<AddProducts />} />
        </Route>
      </Routes>
    </Router>
  );
}

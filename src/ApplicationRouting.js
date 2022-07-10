import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './App/Pages/About';
import Home from './App/Pages/Home'
import Item from './App/Pages/Item';
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
      </Routes>
    </Router>
  );
}

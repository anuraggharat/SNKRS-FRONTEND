import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './App/Pages/About';
import Home from './App/Pages/Home'

export default function ApplicationRouting() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Features from './pages/Features';
import Login from './pages/Login';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

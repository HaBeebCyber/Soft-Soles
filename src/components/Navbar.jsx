import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-0 py-4 left-0 right-0 bg-white fixed top-0 w-full shadow-md">
        {/* Logo */}
        <div
          className="ml-16 text-4xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Soft.Soles
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-12 text-lg">
          <NavLink to="/home">
            <p className="border-b-2 border-black">Home</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="shop">
            <p className="border-b-2 border-black">Shop</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/features">
            <p className="border-b-2 border-black">Features</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/blog">
            <p className="border-b-2 border-black">Blog</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact-us">
            <p className="border-b-2 border-black">Contact Us</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        {/* Login, Cart, Search */}
        <div className="flex items-center space-x-8 mr-16">
          <span>Login</span>
          <span>Cart (0)</span>
          <span className="cursor-pointer">&#128269;</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

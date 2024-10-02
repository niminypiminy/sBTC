"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">BearChain</div>
        
        {/* Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
        <Link href="/login">
        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          </Link>
          <Link href="/signup">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Sign Up
  </button>
</Link>
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">Login</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">Signup</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
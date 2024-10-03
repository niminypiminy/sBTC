"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">Kredia</Link>

        {/* Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/login" className="bg-blue-900 hover:bg-blue-950 text-white hover:text-white transition duration-300 py-2 px-4 rounded-full border border-blue-300">
            Login
          </Link>
          <Link href="/signup" className="text-blue-700 hover:bg-blue-800 hover:text-white transition duration-300 py-2 px-4 rounded-full border border-blue-700">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-md hover:bg-blue-300 transition-colors duration-300 focus:outline-none"
          >
            {isOpen ? 
              <FaTimes className="text-gray-300 h-5 w-5" /> : 
              <FaBars className="text-gray-300 h-5 w-5" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="py-2 space-y-1">
            <Link href="/login" onClick={toggleMenu} className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-500">Login</Link>
            <Link href="/signup" onClick={toggleMenu} className="block px-4 py-2 text-sm text-white hover:bg-blue-800 hover:text-white">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
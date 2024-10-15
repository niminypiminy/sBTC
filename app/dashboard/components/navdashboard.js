"use client";

import React, { useState } from 'react';
import { FaUser, FaCog, FaShieldAlt, FaBell, FaSignOutAlt, FaBars } from 'react-icons/fa';

const DashboardNavbar = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Left Menu */}
      <div className={`fixed top-0 left-0 w-64 bg-lime-900 text-white p-6 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
        <div className="flex items-center mb-8">
          <span className="font-semibold text-xl tracking-tight">Purrlend</span>
        </div>
        <div className="space-y-4">
          <a href="#dashboard" className="block text-teal-200 hover:text-white">Dashboard</a>
          {/* Add more navigation links here */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-0 lg:ml-64 p-6">
        <nav className="flex items-center justify-between bg-lime-900 p-6">
          {/* Hamburger Menu (Desktop & Mobile) */}
          <button
            onClick={handleSidebarToggle}
            className="lg:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <FaBars className="w-6 h-6" />
          </button>

          {/* Mobile Navigation Toggle */}
          <div className="block lg:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              {/* Hamburger Icon for Mobile */}
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="text-sm lg:flex-grow">
              <a href="#dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Dashboard
              </a>
              {/* Additional Navigation Links */}
            </div>

            {/* Icons (Notifications, Profile, Settings, Logout) */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FaBell className="inline-block text-white text-2xl" />
                {/* Badge for unread notifications */}
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </div>

              <FaUser className="inline-block text-white text-2xl" />
              <FaCog className="inline-block text-white text-2xl" />
              <FaShieldAlt className="inline-block text-white text-2xl" />

              <button onClick={onLogout} className="inline-block text-white text-2xl">
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        </nav>

        {/* Main Dashboard Content */}
        <div>
          {/* Your Dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
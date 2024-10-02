"use client";

import React from 'react';
import { FaWindows } from 'react-icons/fa'; // Import Windows icon from React Icons

const HeroSection = () => {
  return (
    <div className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-16">
        <h1 className="text-5xl md:text-5xl font-bold mb-4 mt-16 text-center">
          Empower Your <span className="text-blue-900 font-bold">Assets</span>: Borrow and Lend with Confidence.
        </h1>
        <p className="text-2xl text-gray-700 text-center px-16 md:text-xl mb-8 mt-8">
        Borrow fiat by using Bitcoin as collateral, or lend with confidence knowing your investment is secured by robust smart contracts.
        </p>
        <div className="flex justify-center mt-6">
          <a 
            href="/download" 
            className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaWindows className="mr-2" /> {/* Windows logo */}
           Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
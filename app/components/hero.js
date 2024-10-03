"use client";

import React from 'react';
import { FaWindows } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="bg-black text-white py-28 relative mt-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center relative z-10">
          

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-16 text-center">
            Empower Your <span className="text-blue-300">Assets</span>: Borrow and Lend with Confidence.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 text-center px-16 mb-10 mt-6">
          Borrow fiat using Bitcoin as collateral, or lend confidently, knowing your investment is protected by trustless smart contracts.          </p>
          <div className="flex justify-center">
            <a 
              href="/download" 
              className="flex items-center bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            >
              <FaWindows className="mr-2 text-xl" />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
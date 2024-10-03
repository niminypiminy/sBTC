"use client";

import React from 'react';

const BannerSection = () => {
  return (
    <section 
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <div className="w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
      </div>
      <div className="absolute inset-0 flex justify-end items-end pointer-events-none">
        <div className="w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 flex flex-col items-center text-white">
          Your Money, Your Rules: <span className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 inline-flex items-center transition-transform hover:scale-105">
            Be Your Own Bank.
          </span>
        </h2>
        <h3 className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        At Kredia, we combine law and technology to provide you with the off-ramp to decentralized finance. </h3>
      </div>
    </section>
  );
};

export default BannerSection;
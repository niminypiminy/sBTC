"use client";

import React from 'react';


const BannerSection = () => {
  return (
    <div className="bg-white text-black py-24 relative">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Your Money, Your Rules: <span className="text-white bg-blue-700 px-2 py-1 rounded">Be Your Own Bank.</span>
        </h2>
        <h3 className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Our unique order book and matching algorithm gives users the flexibility to borrow or lend on their terms. At Bearchain, we strive to unbank the banks, combining law and technology to provide you with the off-ramp to decentralized finance.
        </h3>
     
      </div>
    </div>
  );
};

export default BannerSection;
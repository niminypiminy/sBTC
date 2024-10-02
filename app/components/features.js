"use client";

import React from 'react';


const features = [
  {
    title: "Borrow Wisely",
    description: "Use our order book to establish the terms of your loan.",
  },
  {
    title: "Transfer Swiftly",
    description: "Transfer BTC to any wallet, anywhere, within seconds.",
  },
  {
    title: "Lend Securely",
    description: "Lend on your own terms: set interest rates, term limits, and LTV ratios",
  },
  {
    title: "Bitcoin Finality",
    description: "All payments are settled on the bitcoin blockchain.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
        {/* Left Column: Features */}
        <div className="w-full p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-700 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default FeaturesSection;
"use client";

import React from 'react';

const features = [
  {
    title: "Borrow or Lend",
    description: "Use our order book to lend or borrow funds with our matching algorithm",
  },
  {
    title: "Transfer Swiftly",
    description: "Transfer BTC to any wallet, anywhere, within seconds.",
  },
  {
    title: "Select your terms",
    description: "Set interest rates, term limits and LTV ratios.",
  },
  {
    title: "Bitcoin Finality",
    description: "All payments are settled on the bitcoin blockchain.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
        {/* Left Column: Features */}
        <div className="w-full p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl shadow-blue-300 hover:shadow-blue-300 hover:border-t-4 hover:border-blue-500"
              >
                <h3 className="text-xl font-semibold text-blue-500">{feature.title}</h3>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
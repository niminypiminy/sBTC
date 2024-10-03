"use client";

import React, { useState } from 'react';

const LendForm = () => {
  const [lendAmount, setLendAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [lendDuration, setLendDuration] = useState('');

  const handleLendSubmit = (e) => {
    e.preventDefault();
    // Convert months to an integer or handle as necessary
    const durationInMonths = parseInt(lendDuration, 10);
    console.log({ 
      lendAmount, 
      interestRate, 
      lendDuration: durationInMonths 
    });
    // Add logic here to handle the form submission, e.g., API call
  };

  return (
    <form onSubmit={handleLendSubmit} className="text-white bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
      <div className="flex flex-col">
        <label htmlFor="lendAmount" className="mb-2 font-medium">Amount to Lend</label>
        <input 
          id="lendAmount" 
          type="number"
          value={lendAmount} 
          onChange={(e) => setLendAmount(e.target.value)} 
          className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
          placeholder="Enter amount in BTC"
          step="0.00000001"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lendInterestRate" className="mb-2 font-medium">Minimum Interest Rate (%)</label>
        <input 
          id="lendInterestRate" 
          type="number" 
          value={interestRate} 
          onChange={(e) => setInterestRate(e.target.value)} 
          className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
          placeholder="e.g., 4"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lendDuration" className="mb-2 font-medium">Lending Duration (months)</label>
        <input 
          id="lendDuration" 
          type="number" 
          value={lendDuration} 
          onChange={(e) => setLendDuration(e.target.value)} 
          className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
          placeholder="e.g., 3"
        />
      </div>
      <button 
        type="submit" 
        className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Submit Lend Offer
      </button>
    </form>
  );
};

export default LendForm;
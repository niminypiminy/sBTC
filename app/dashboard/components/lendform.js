"use client";

import React, { useState } from 'react';

const LendForm = () => {
  const [lendAmount, setLendAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [lendDuration, setLendDuration] = useState('');

  const handleLendSubmit = (e) => {
    e.preventDefault();
    console.log({ lendAmount, interestRate, lendDuration });
    // Handle lend form submission logic here
  };

  return (
    <form onSubmit={handleLendSubmit} className="text-white space-y-4">
      <div>
        <label htmlFor="lendAmount">Amount to Lend</label>
        <input 
          id="lendAmount" 
          type="number"
          value={lendAmount} 
          onChange={(e) => setLendAmount(e.target.value)} 
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          placeholder="BTC"
          step="0.00000001"
        />
      </div>
      <div>
        <label htmlFor="lendInterestRate">Interest Rate (%)</label>
        <input 
          id="lendInterestRate" 
          type="number" 
          value={interestRate} 
          onChange={(e) => setInterestRate(e.target.value)} 
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          placeholder="e.g., 4"
        />
      </div>
      <div>
        <label htmlFor="lendDuration">Lending Duration (days)</label>
        <input 
          id="lendDuration" 
          type="number" 
          value={lendDuration} 
          onChange={(e) => setLendDuration(e.target.value)} 
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          placeholder="e.g., 60"
        />
      </div>
      <button 
        type="submit" 
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Submit Lend Offer
      </button>
    </form>
  );
};

export default LendForm;
"use client";

import React, { useState } from 'react';

const BorrowForm = () => {
  const [borrowAmount, setBorrowAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [borrowDuration, setBorrowDuration] = useState('');

  const handleBorrowSubmit = (e) => {
    e.preventDefault();
    const durationInMonths = parseInt(borrowDuration, 10);
    console.log({ 
      borrowAmount, 
      interestRate, 
      borrowDuration: durationInMonths 
    });
    // Handle borrow form submission logic here
  };

  return (
    <form onSubmit={handleBorrowSubmit} className="text-white bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
      <div className="flex flex-col">
        <label htmlFor="borrowAmount" className="mb-2 font-medium">Amount to Borrow</label>
        <input 
          id="borrowAmount" 
          type="number"
          value={borrowAmount} 
          onChange={(e) => setBorrowAmount(e.target.value)} 
          className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
          placeholder="Enter amount in BTC"
          step="0.00000001"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="interestRate" className="mb-2 font-medium">Maximum Interest Rate (%)</label>
        <input 
          id="interestRate" 
          type="number" 
          value={interestRate} 
          onChange={(e) => setInterestRate(e.target.value)} 
          className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
          placeholder="e.g., 4"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="borrowDuration" className="mb-2 font-medium">Borrowing Duration (months)</label>
        <input 
          id="borrowDuration" 
          type="number" 
          value={borrowDuration} 
          onChange={(e) => setBorrowDuration(e.target.value)} 
          className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
          placeholder="e.g., 3"
        />
      </div>
      <button 
        type="submit" 
        className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Submit Borrow Request
      </button>
    </form>
  );
};

export default BorrowForm;
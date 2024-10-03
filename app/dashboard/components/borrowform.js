"use client";

import React, { useState } from 'react';

const BorrowForm = () => {
  const [amount, setAmount] = useState('');
  const [maxInterestRate, setMaxInterestRate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ amount, maxInterestRate, duration });
    // Here you would typically handle the form submission, 
    // e.g., send data to your backend or interact with a blockchain
  };

  return (
    <form onSubmit={handleSubmit} className="text-white space-y-4">
      <div>
        <label htmlFor="amount">Amount to Borrow</label>
        <input 
          id="amount" 
          type="number"
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          placeholder="BTC"
          step="0.00000001"
        />
      </div>
      <div>
        <label htmlFor="interestRate">Max Interest Rate (%)</label>
        <input 
          id="interestRate" 
          type="number" 
          value={maxInterestRate} 
          onChange={(e) => setMaxInterestRate(e.target.value)} 
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          placeholder="e.g., 5"
        />
      </div>
      <div>
        <label htmlFor="duration">Loan Duration (days)</label>
        <input 
          id="duration" 
          type="number" 
          value={duration} 
          onChange={(e) => setDuration(e.target.value)} 
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          placeholder="e.g., 30"
        />
      </div>
      <button 
        type="submit" 
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Submit Borrow Request
      </button>
      <p className="text-xs text-gray-400 mt-2">LTV Ratio: 50%</p>
    </form>
  );
};

export default BorrowForm;
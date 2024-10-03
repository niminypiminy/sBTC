"use client";

import React, { useState } from 'react';
import BorrowForm from './borrowform';
import LendForm from './lendform';

const OrderBook = () => {
  const [activeTab, setActiveTab] = useState('lend');

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-lg">
        <h1 className="text-center text-3xl font-bold text-black mb-6">BTC Order Book</h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          {/* Tabs */}
          <div className="flex justify-center mb-4">
            <button 
              onClick={() => setActiveTab('lend')} 
              className={`px-4 py-2 mx-2 rounded ${activeTab === 'lend' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Lend
            </button>
            <button 
              onClick={() => setActiveTab('borrow')} 
              className={`px-4 py-2 mx-2 rounded ${activeTab === 'borrow' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Borrow
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'lend' ? <LendForm /> : <BorrowForm />}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
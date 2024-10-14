"use client";

import React, { useState, useEffect } from 'react';
import { FaBitcoin, FaArrowDown, FaArrowUp, FaWallet } from 'react-icons/fa';

const WalletBalance = () => {
  const [btcBalance, setBtcBalance] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock fetch function
  useEffect(() => {
    setTimeout(() => {
      setBtcBalance(1.234);  // mock BTC balance
      setUsdcBalance(2500.75);  // mock USDC balance
      setTransactions([
        { id: 1, amount: -50, type: 'withdrawal', date: '2024-10-12', currency: 'USDC' },
        { id: 2, amount: 1000, type: 'deposit', date: '2024-10-10', currency: 'USDC' },
        { id: 3, amount: 0.5, type: 'deposit', date: '2024-10-08', currency: 'BTC' },
        { id: 4, amount: -0.1, type: 'withdrawal', date: '2024-10-05', currency: 'BTC' },
      ]);
      setLoading(false);
    }, 1500);  // Simulate loading
  }, []);

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Wallet Balance Cards */}
      <div className="flex space-x-6 w-full max-w-screen-lg">
        {/* Bitcoin Wallet */}
        <div className="w-1/2 bg-white shadow-lg rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <FaBitcoin className="text-4xl text-yellow-600" />
            <h2 className="text-xl font-semibold text-gray-800">Bitcoin Wallet</h2>
          </div>
          <div className="flex items-center justify-between mb-6">
            {loading ? (
              <div className="w-16 h-16 border-t-4 border-teal-500 border-solid rounded-full animate-spin"></div>
            ) : (
              <>
                <p className="text-3xl font-bold text-gray-800">
                  {btcBalance.toFixed(4)} BTC
                </p>
              </>
            )}
          </div>
        </div>

        {/* USDC Wallet */}
        <div className="w-1/2 bg-white shadow-lg rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <FaWallet className="text-4xl text-teal-500" />
            <h2 className="text-xl font-semibold text-gray-800">USDC Wallet</h2>
          </div>
          <div className="flex items-center justify-between mb-6">
            {loading ? (
              <div className="w-16 h-16 border-t-4 border-teal-500 border-solid rounded-full animate-spin"></div>
            ) : (
              <>
                <p className="text-3xl font-bold text-gray-800">
                  ${usdcBalance.toFixed(2)}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No recent transactions</p>
        ) : (
          <ul className="space-y-4">
            {transactions.map(transaction => (
              <li key={transaction.id} className={`flex items-center justify-between ${transaction.currency === 'USDC' ? 'text-teal-600' : 'text-yellow-600'}`}>
                <div>
                  <p className="font-medium">{transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'} - {transaction.currency}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p className={`font-semibold ${transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'deposit' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WalletBalance;
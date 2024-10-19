import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';


const WalletBalance = () => {
  const usdcBalance = 10500;  // Example USDC balance
  const btcBalance = 1.5;     // Example BTC balance
  const totalPortfolioValue = 15000; // Example total portfolio value
  const btcPrice = 68200; // Example current Bitcoin price

  return (
    <div className="max-w-2xl w-full mx-auto mt-8 p-4 sm:p-6 lg:p-8">
      <div className="text-right mb-4">
        <div className="text-4xl text-left">
          <span className="font-bold">{totalPortfolioValue.toString().split('.')[0]}</span>
          <span>.{totalPortfolioValue.toFixed(2).split('.')[1] || '00'}</span>
        </div>
        <div className="text-sm text-left">BTC Current Market Price: ${btcPrice}</div>
      </div>
      <div className="space-y-4">

        {/* USDC Wallet Info */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
            <BiDollar className="text-4xl text-green-400 mr-3" />
              <div>
                <div className="text-2xl font-bold">USDC {usdcBalance.toFixed(2)}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Send</button>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Receive</button>
            </div>
          </div>
        </div>

        {/* Bitcoin Wallet Info */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaBitcoin className="text-4xl text-orange-500 mr-3" />
              <div>
                <div className="text-2xl font-bold">BTC {btcBalance.toFixed(4)}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Send</button>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Receive</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletBalance;
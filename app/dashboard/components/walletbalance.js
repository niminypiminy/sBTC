import React, { useEffect, useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { GiGoldBar } from 'react-icons/gi';
import CreateWalletModal from './createwallet'; // Import your modal
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WalletBalance = () => {
  const [wallets, setWallets] = useState({
    usdt: { balance: 0, created: false },
    btc: { balance: 0, created: false },
    xaut: { balance: 0, created: false },
  });
  const [isCreateWalletOpen, setIsCreateWalletOpen] = useState(false);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [walletType, setWalletType] = useState(null); // Track the wallet type for creation
  const authToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8kzD815Z/auth/get-wallet', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Update wallet state based on fetched data
          setWallets((prev) => ({
            ...prev,
            btc: { ...prev.btc, balance: data.address ? 1.5 : 0, created: !!data.address },
            usdt: { ...prev.usdt, balance: 10500, created: true }, // Assuming USDT is always created for demo
            xaut: { ...prev.xaut, balance: 0, created: false },
          }));
        } else {
          toast.error('Failed to fetch wallet data.');
        }
      } catch (error) {
        console.error('Error fetching wallet:', error);
        toast.error('Error fetching wallet data.');
      }
    };

    fetchWallet();
  }, [authToken]);

  const createWallet = (type) => {
    if (wallets[type].created) return; // Prevent creating the wallet if it already exists
    setIsCreateWalletOpen(true); // Open the wallet creation modal
    setWalletType(type); // Set the wallet type for the modal
  };

  const handleWalletCreated = (type) => {
    setWallets((prev) => ({
      ...prev,
      [type]: { ...prev[type], created: true },
    }));
    toast.success(`${type} wallet created successfully!`); // Notify user
    setIsCreateWalletOpen(false); // Close the creation modal
  };

  const toggleTransactionHistory = () => {
    setShowTransactionHistory((prev) => !prev);
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-8 p-4 sm:p-6 lg:p-8">
      <div className="text-right mb-4">
        <div className="text-4xl text-left">
          <span className="font-bold">
            {wallets.usdt.balance + wallets.btc.balance * 68200} {/* Calculate total balance */}
          </span>
        </div>
        <div className="text-sm text-left">BTC Current Market Price: $68200</div>
      </div>

      <div className="space-y-4">
        {/* USDT Wallet Info */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BiDollar className="text-4xl text-green-400 mr-3" />
              <div>
                <div className="text-2xl font-bold">USDT {wallets.usdt.created ? wallets.usdt.balance.toFixed(2) : 'Not Created'}</div>
              </div>
            </div>
            {!wallets.usdt.created && (
              <button onClick={() => createWallet('usdt')} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                Create Wallet
              </button>
            )}
          </div>
        </div>

        {/* Bitcoin Wallet Info */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaBitcoin className="text-4xl text-orange-500 mr-3" />
              <div>
                <div className="text-2xl font-bold">BTC {wallets.btc.created ? wallets.btc.balance.toFixed(4) : 'Not Created'}</div>
              </div>
            </div>
            {wallets.btc.created ? (
              <div className="flex space-x-2">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full">Send</button>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">Receive</button>
              </div>
            ) : (
              <button onClick={() => createWallet('btc')} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                Create Wallet
              </button>
            )}
          </div>
        </div>

        {/* XAUT Wallet Info */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <GiGoldBar className="text-4xl text-yellow-400 mr-3" />
              <div>
                <div className="text-2xl font-bold">XAUT {wallets.xaut.created ? wallets.xaut.balance.toFixed(2) : 'Not Created'}</div>
              </div>
            </div>
            {!wallets.xaut.created && (
              <button onClick={() => createWallet('xaut')} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                Create Wallet
              </button>
            )}
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-800 text-white rounded-2xl shadow-xl p-6 mt-4">
          <button onClick={toggleTransactionHistory} className="w-full text-left">
            <h2 className="text-2xl font-bold">Transaction History</h2>
          </button>
          {showTransactionHistory && (
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Amount</th>
                  <th className="text-left p-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {/* Transaction data could be fetched from a backend */}
                {[
                  { id: 1, date: '2024-10-20', amount: 500, type: 'Deposit' },
                  { id: 2, date: '2024-10-18', amount: 200, type: 'Withdrawal' },
                  { id: 3, date: '2024-10-15', amount: 1000, type: 'Deposit' },
                ].map(transaction => (
                  <tr key={transaction.id}>
                    <td className="p-2">{transaction.date}</td>
                    <td className="p-2">{transaction.amount}</td>
                    <td className="p-2">{transaction.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Create Wallet Modal */}
      <CreateWalletModal
        isOpen={isCreateWalletOpen}
        onRequestClose={() => setIsCreateWalletOpen(false)}
        onWalletCreated={handleWalletCreated}
        walletType={walletType} // Pass wallet type if needed
      />
    </div>
  );
};

export default WalletBalance;
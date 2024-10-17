import React from 'react';

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { FaWallet, FaShieldAlt, FaUser, FaListUl, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const router = useRouter(); // Initialize useRouter

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token'); // Adjust the key as needed
    // Redirect to the Logout component
    router.push('logout'); // Adjust the route as needed
  };

  return (
    <div className="w-64 bg-gray-100 h-screen p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-4">
        <li onClick={() => setActiveTab('balance')} className={`cursor-pointer ${activeTab === 'balance' ? 'font-semibold' : ''}`}>
          <FaWallet className="inline mr-2" /> Balance
        </li>
        <li onClick={() => setActiveTab('security')} className={`cursor-pointer ${activeTab === 'security' ? 'font-semibold' : ''}`}>
          <FaShieldAlt className="inline mr-2" /> Security Settings
        </li>
        <li onClick={() => setActiveTab('profile')} className={`cursor-pointer ${activeTab === 'profile' ? 'font-semibold' : ''}`}>
          <FaUser className="inline mr-2" /> Profile Settings
        </li>
        <li onClick={() => setActiveTab('orderbook')} className={`cursor-pointer ${activeTab === 'orderbook' ? 'font-semibold' : ''}`}>
          <FaListUl className="inline mr-2" /> Order Book
        </li>
        <li onClick={handleLogout} className={`cursor-pointer ${activeTab === 'logout' ? 'font-semibold' : ''}`}>
          <FaSignOutAlt className="inline mr-2" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
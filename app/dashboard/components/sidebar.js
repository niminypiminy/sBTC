import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaWallet, FaShieldAlt, FaUser, FaListUl, FaSignOutAlt, FaBars, FaCompass } from 'react-icons/fa'; // Import FaCompass for the Discovery icon

const Sidebar = ({ activeTab, setActiveTab }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('../login');
  };

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <div>
      {/* Top Navbar for Mobile */}
      <div className={`fixed top-0 inset-x-0 z-50 ${isOpen ? 'h-16' : 'h-12'} bg-gray-900 text-fuchsia-50 flex items-center justify-between p-4 transition-height duration-300 md:hidden`}>
        <button onClick={toggleSidebar} className="text-fuchsia-50">
          <FaBars />
        </button>
        <h2 className={`text-xl font-bold transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Dashboard</h2>
      </div>

      {/* Sidebar for Desktop */}
      <div className={`fixed inset-y-0 left-0 z-50 ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-gray-900 text-fuchsia-50 h-screen p-6 shadow-md hidden md:block`}>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-fuchsia-50">
          <FaBars />
        </button>
        <h2 className={`text-2xl font-bold mb-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Dashboard</h2>
        <ul className="space-y-4">
          <li
            onClick={() => setActiveTab('balance')}
            className={`cursor-pointer transition-colors duration-200 flex items-center ${activeTab === 'balance' ? 'font-semibold bg-blue-600' : 'hover:bg-blue-300'} p-2 rounded`}
          >
            <FaWallet className={`inline mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            {isOpen && 'Balance'}
          </li>
          <li
            onClick={() => setActiveTab('orderbook')}
            className={`cursor-pointer transition-colors duration-200 flex items-center ${activeTab === 'orderbook' ? 'font-semibold bg-blue-600' : 'hover:bg-blue-300'} p-2 rounded`}
          >
            <FaListUl className={`inline mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            {isOpen && 'Borrow/Lend'}
          </li>
          <li
            onClick={toggleSettings}
            className={`cursor-pointer transition-colors duration-200 flex items-center ${activeTab === 'security' ? 'font-semibold bg-blue-600' : 'hover:bg-blue-300'} p-2 rounded`}
          >
            <FaShieldAlt className={`inline mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            {isOpen && 'Settings'}
          </li>
          {isSettingsOpen && (
            <ul className="ml-4 space-y-2">
              <li
                onClick={() => setActiveTab('recovery')}
                className={`cursor-pointer transition-colors duration-200 flex items-center ${activeTab === 'recovery' ? 'font-semibold bg-blue-600' : 'hover:bg-blue-300'} p-2 rounded`}
              >
                {isOpen && 'Recovery'}
              </li>
              <li
                onClick={() => setActiveTab('security')}
                className={`cursor-pointer transition-colors duration-200 flex items-center ${activeTab === 'security' ? 'font-semibold bg-blue-600' : 'hover:bg-blue-300'} p-2 rounded`}
              >
                {isOpen && 'Security'}
              </li>
            </ul>
          )}
          <li
            onClick={() => setActiveTab('discovery')}
            className={`cursor-pointer transition-colors duration-200 flex items-center ${activeTab === 'discovery' ? 'font-semibold bg-blue-600' : 'hover:bg-blue-300'} p-2 rounded`}
          >
            <FaCompass className={`inline mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            {isOpen && 'Discovery'}
          </li>
          <li
            onClick={() => setActiveTab('contact')}
            className={`cursor-pointer transition-colors duration-200 flex items-center ${activeTab === 'contact' ? 'font-semibold bg-blue-600' : 'hover:bg-blue-300'} p-2 rounded`}
          >
            <FaUser className={`inline mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            {isOpen && 'Contact'}
          </li>
          <li
            onClick={handleLogout}
            className={`cursor-pointer transition-colors duration-200 flex items-center hover:bg-blue-300 p-2 rounded`}
          >
            <FaSignOutAlt className={`inline mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            {isOpen && 'Logout'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import WalletBalance from './components/walletbalance';
import Sidebar from './components/sidebar';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('balance');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login'); // Redirect to login if no token
        return;
      }

      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8kzD815Z/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in headers
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data');
      }
    };

    fetchUserData();
  }, [router]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>; // Show loading state while fetching
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'balance':
        return <WalletBalance />;
      case 'security':
        return <div>Security Settings Component</div>;
      case 'profile':
        return <div>Profile Settings Component</div>;
      case 'orderbook':
        return <div>Order Book Component</div>;
      default:
        return <WalletBalance />;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <h1>Welcome, {user.name}!</h1>
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default Dashboard;
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import WalletBalance from './components/walletbalance';  // Ensure correct case
import SecuritySettings from './components/security';
import Transactions from './components/swap';
import Sidebar from './components/sidebar';
import OrderBook from './components/orderbook';
import Discovery from './components/blog';  // Import the Discovery component

const getGreeting = (name) => {
  const hours = new Date().getHours();
  return hours < 12
    ? `Good morning, ${name}!`
    : hours < 18
      ? `Good afternoon, ${name}!`
      : `Good evening, ${name}!`;
};

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('balance');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8kzD815Z/auth/me', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data');
      }
    };

    fetchUserData();
  }, [router]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Loading...</p>;

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'balance':
        return <WalletBalance />;
      case 'security':
        return <SecuritySettings />;
      case 'swap':
        return <Transactions />;
      case 'orderbook':
        return <OrderBook />;
      case 'discovery':  // Add case for Discovery
        return <Discovery />;
      default:
        return <WalletBalance />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-4xl text-center font-bold mb-8 mt-8">{getGreeting(user.name)}</h1>
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default Dashboard;
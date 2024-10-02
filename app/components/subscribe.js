"use client";

import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic (e.g., send email to backend)
    console.log("Subscribed with email:", email);
    setEmail(''); // Clear the input field
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to stay informed</h2>
        <p className="mb-8">Stay updated with the latest features.</p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 w-64 rounded-l-md border border-gray-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
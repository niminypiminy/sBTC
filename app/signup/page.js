"use client"; // Add this line at the very top of your file

import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head'


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:OHuLzjtm/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.token) {
        console.log('Token received:', data.token);
        // Here you would handle the token, like saving it to localStorage or cookies
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative">
      <div className="w-full max-w-md p-8 space-y-8 bg-lime-900 shadow-lg rounded-xl z-10">
        <h1 className="text-3xl font-bold text-center text-white">Sign up</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="true"
              className="w-full pl-4 pr-4 py-2 border-b-2 border-lime-900 bg-lime-50 text-black focus:outline-none focus:border-lime-50 transition-colors"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="true"
              className="w-full pl-4 pr-4 py-2 border-b-2 border-lime-900 bg-lime-50 text-black focus:outline-none focus:border-lime-50 transition-colors"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-lime-500 hover:bg-lime-900 hover:text-lime-100 rounded-md transition-colors duration-200"
            >
              Sign up
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            Already have an account? 
            <Link href="/login" className="font-medium text-lime-100 px-4">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
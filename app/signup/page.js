"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8kzD815Z/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); // Log the response for debugging

      if (response.ok) {
        if (data.authToken) {  // Use authToken instead of token
          localStorage.setItem('token', data.authToken);
          setMessage('Thank you for signing up.');
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
        } else {
          throw new Error('Auth token was expected but not received.');
        }
      } else {
        setError(data.message || 'An error occurred during signup.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setError(error.message || 'Failed to connect to the server. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center">Create an Account</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              required 
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              required 
              placeholder="Password"
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}
          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center text-sm">
            Already have an account? 
            <Link href="/login" className="font-medium text-lime-600 hover:text-lime-500 px-2">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
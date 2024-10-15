"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:OHuLzjtm/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
          if (errorData.message) {
            // Xano specific error message
            setError(errorData.message);
          } else if (response.status === 400) {
            setError('Bad Request: Please check your input.');
          } else if (response.status === 401 || response.status === 403) {
            setError('Unauthorized: Incorrect credentials or access denied.');
          } else if (response.status === 500) {
            setError('Server Error: Something went wrong on our end.');
          } else {
            setError(`HTTP Error ${response.status}: ${response.statusText}`);
          }
        } catch (parseError) {
          // If we can't parse the JSON, we still want to show something went wrong
          setError('An unexpected error occurred. Please try again.');
        }
        throw new Error(errorData?.message || 'Signup failed');
      }

      const data = await response.json();
      if (data.token) {
        console.log('Token received:', data.token);
        localStorage.setItem('token', data.token);
        // Here you might want to redirect or show a success message
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      if (!error.message) {
        setError('Network error or unexpected issue occurred.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
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
              required
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
              required
              className="w-full pl-4 pr-4 py-2 border-b-2 border-lime-900 bg-lime-50 text-black focus:outline-none focus:border-lime-50 transition-colors"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
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
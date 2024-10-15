"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:OHuLzjtm/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      if (data.token) {
        console.log('Token received:', data.token);
        localStorage.setItem('token', data.token); // Store the token for later use
        router.push('/dashboard'); // Redirect to dashboard
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="w-full max-w-md p-8 space-y-8 bg-lime-900 shadow-lg rounded-xl z-10">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
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
              Login
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            <Link href="/signup" className="font-medium text-lime-100 px-4">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
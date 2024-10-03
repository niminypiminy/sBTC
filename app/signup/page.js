import Link from 'next/link';
import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative">

      <div className="w-full max-w-md p-8 space-y-8 bg-black shadow-lg rounded-xl z-10">
        <h1 className="text-3xl font-bold text-center text-white">Sign up</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full pl-4 pr-4 py-2 border-b-2 border-blue-300 bg-blue-900 text-blue-900 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full pl-4 pr-4 py-2 border-b-2 border-blue-300 bg-blue-900 text-black focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200"
            >
              Sign up
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            Already have an account? 
            <Link href="/login" className="font-medium text-blue-500 px-4 hover:text-blue-600">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
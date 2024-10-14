import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Background decoration with blockchain pattern */}

      <div className="w-full max-w-md p-8 space-y-8 bg-lime-900 shadow-lg rounded-xl z-10">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
              required
              className="w-full pl-4 pr-4 py-2 border-b-2 border-lime-900 bg-lime-50 text-black focus:outline-none focus:border-lime-50 transition-colors"
              placeholder="Password"
            />
          </div>
          <div>
            <Link href="/dashboard">
            <button
              type="submit"
              className="w-full py-2 text-white bg-lime-500 hover:bg-lime-900 hover:text-lime-100 rounded-md transition-colors duration-200"
            >
              Login
            </button>
            </Link>
          </div>
          <div className="text-center text-sm text-gray-400">
            <a href="#" className="font-medium text-lime-100">Forgot your password?</a>
          </div>
          <div className="text-center text-sm text-gray-400">
            Don't have an account? 
            <Link href="/signup" className="font-medium text-lime-100 px-4">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
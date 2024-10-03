import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 relative">
      {/* Background decoration with blockchain pattern */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Here we create a simple repeating pattern representing blockchain blocks */}
        {Array.from({ length: 10 }, (_, i) => (
          Array.from({ length: 10 }, (_, j) => (
            <>
              <rect x={i * 10} y={j * 10} width="8" height="8" fill="rgba(0, 30, 255, 0.8)" rx="1"/>
              {/* Lines connecting the blocks */}
              {(i < 9) && <line x1={(i * 10) + 8} y1={(j * 10) + 4} x2={(i * 10) + 10} y2={(j * 10) + 4} stroke="rgba(0, 25, 216, 0.8)" strokeWidth="0.5" />}
              {(j < 9) && <line x1={(i * 10) + 4} y1={(j * 10) + 8} x2={(i * 10) + 4} y2={(j * 10) + 10} stroke="rgba(0, 25, 216, 0.8)" strokeWidth="0.5" />}
            </>
          ))
        ))}
      </svg>

      <div className="w-full max-w-md p-8 space-y-8 bg-black shadow-lg rounded-xl z-10">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full pl-4 pr-4 py-2 border-b-2 border-blue-300 bg-blue-100 text-black focus:outline-none focus:border-blue-500 transition-colors"
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
              className="w-full pl-4 pr-4 py-2 border-b-2 border-blue-300 bg-blue-100 text-black focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Password"
            />
          </div>
          <div>
            <Link href="/dashboard">
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200"
            >
              Login
            </button>
            </Link>
          </div>
          <div className="text-center text-sm text-gray-400">
            <a href="#" className="font-medium text-blue-500 hover:text-blue-600">Forgot your password?</a>
          </div>
          <div className="text-center text-sm text-gray-400">
            Don't have an account? 
            <Link href="/signup" className="font-medium text-blue-500 px-4 hover:text-blue-600">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
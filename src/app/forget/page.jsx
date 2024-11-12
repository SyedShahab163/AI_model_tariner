// pages/forgot-password.js
import React from 'react';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-customDark text-gray-300 flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full py-3 px-6 bg-customDark border-b border-gray-700">
        <h1 className="text-white text-lg font-semibold">ExamGuard</h1>
      </div>

      {/* Card Wrapper for Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow w-full px-4 mt-4">
        <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Centered Title */}
          <h2 className="text-xl font-semibold text-white text-center mb-4">Forgot your password?</h2>

          {/* Left-Aligned Description and Form */}
          <div className="w-full text-left space-y-4">
            <p className="text-gray-400 text-sm">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Send Reset Link Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-500 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Send Reset link
                </button>
              </div>
            </form>

            {/* Back to Sign In Link */}
            <div>
              <p className="text-gray-400 text-sm">
                Back to <a href="/Signup" className="text-blue-500 hover:underline">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

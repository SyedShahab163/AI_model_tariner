// import { ShieldCheckIcon } from '@heroicons/react/24/solid';
export default function Home() {
    return (
      <div className="min-h-screen bg-customDark text-white">
        {/* Navbar */}
        <nav className="bg-customDark py-4 shadow">
          <div className="container mx-auto flex justify-left">
            <h1 className="text-xl font-bold">ExamGuard</h1>
          </div>
        </nav>
  
        {/* Main Form */}
        <div className="flex items-center justify-center py-12">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Create an account</h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="username">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  placeholder="Enter your username" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Enter your password" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="confirm-password">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirm-password" 
                  placeholder="Confirm password" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="flex items-center mb-6">
                <input type="checkbox" id="terms" className="text-blue-500 mr-2" />
                <label htmlFor="terms" className="text-sm">I agree to the Terms of Service and Privacy Policy</label>
              </div>
  
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Sign up
              </button>
            </form>
  
            <div className="text-center mt-4">
              <button className="flex items-center justify-center w-full gap-2 text-white py-2 px-4 rounded  transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.35 11.1h-9.42v2.93h5.8a5.01 5.01 0 0 1-2.19 3.3v2.71h3.54c2.06-1.89 3.25-4.67 3.25-8 0-.43-.03-.85-.1-1.26z" />
                  <path d="M12 22c2.43 0 4.54-.8 6.14-2.13l-3.54-2.7c-.84.58-1.9.93-2.6.93-2.02 0-3.73-1.36-4.34-3.18h-3.62v2.8A9.99 9.99 0 0 0 12 22z" />
                  <path d="M5.66 13.02a6.004 6.004 0 0 1 0-3.99V6.23H2.05a9.99 9.99 0 0 0 0 11.53h3.62v-2.74zm8.4-8.4c.5-.5 1.17-.93 1.94-1.23h-.01L14.08 2c-1.6-1.32-3.7-2.1-5.91-2.1A9.99 9.99 0 0 0 2.05 6.23l3.61 2.8c.61-1.82 2.33-3.18 4.34-3.18 1.2 0 2.28.46 3.06 1.1zM12 2c1.73 0 3.37.64 4.64 1.69L14.08 6.4A5.96 5.96 0 0 0 12 5a5.978 5.978 0 0 0-5.68 3.99L2.05 6.23C3.7 4.53 7.55 2 12 2z" />
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
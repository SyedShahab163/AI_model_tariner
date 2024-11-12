// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//

//   // Handle form submission
  

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const payload = {
//     username: username,
//     password: password
//   };

//   try {
//     const response = await axios.post('https://23f8-137-59-218-169.ngrok-free.app/login/', payload);
//     // console.log('User logged in successfully:', response.data);
//     // Handle successful login
//   } catch (error) {
//     // console.error('Error during login:', error);
//     if (error.response) {
//     //   console.error('Error response:', error.response.data);
//     }
//   }
// };


//   return (
//     <div className="bg-customDark min-h-screen text-white ">
//       {/* Navbar */}
//       <header className="flex justify-left items-left p-4 border-b border-white ">
//         <h1 className="text-2xl font-bold">ExamGuard</h1>
//       </header>

//       {/* Centered Heading */}
//       <div className="w-full flex justify-center mt-4 mb-25">
//         <h2 className="text-2xl font-semibold text-center text-white">Log in to ExamGuard</h2>
//       </div>

//       <div className="w-full max-w-md px-6 mt-16">
//         <form onSubmit={handleSubmit} className="flex flex-col items-center">
//           <div className="w-11/12 mb-4 text-left">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your username"
//             />
//           </div>

//           <div className="w-11/12 mb-4 text-left">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Error message */}
//           {errorMessage && (
//             <div className="w-11/12 mb-4 text-left text-red-500">
//               <p>{errorMessage}</p>
//             </div>
//           )}

//           <div className="w-11/12 mb-4 text-right">
//             <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
//           </div>

//           <button
//             type="submit"
//             className="w-11/12 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-200"
//           >
//             Log in
//           </button>

//           <p className="text-center text-gray-400 mt-6 w-11/12">
//             Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client"
import React from 'react';
import axios from 'axios';
export default function LoginPage() {
  //   // Handle form submission
  



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      username: username,
      password: password
    };
  
    try {
      const response = await axios.post('https://23f8-137-59-218-169.ngrok-free.app/login', payload);
      // console.log('User logged in successfully:', response.data);
      // Handle successful login
    } catch (error) {
      // console.error('Error during login:', error);
      if (error.response) {
        // console.error('Error response:', error.response.data);
      }
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-customDark">
        {/* <header className="flex justify-left items-left p-4 border-b border-white ">
         <h1 className="text-2xl font-bold">ExamGuard</h1>
       </header> */}
      <div className="w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold text-white mb-8">Log in to ExamGuard</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="block w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="/forget" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 text-sm font-medium text-white bg-sky-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">Don't have an account?</p>
          <a href="/Signup" className="text-sm text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

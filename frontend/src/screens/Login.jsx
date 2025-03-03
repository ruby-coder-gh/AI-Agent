import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-white text-2xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input type="email" className="w-full p-2 mt-1 bg-gray-700 text-white rounded focus:outline-none" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Password</label>
            <input type="password" className="w-full p-2 mt-1 bg-gray-700 text-white rounded focus:outline-none" />
          </div>
          <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Don't have an account? <Link to="/signup" className="text-blue-400 hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-10">
        {/* Left Side */}
        <div className="w-1/2 hidden md:flex items-center justify-center p-8">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/login-img.jpg"
              alt="Library"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold text-center px-6">
                Welcome Back to <br /> SmartLib
              </h2>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Username"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

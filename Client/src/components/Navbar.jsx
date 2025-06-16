import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left side logo */}
        <Link className="text-2xl font-bold text-blue-600" to='/'>SmartLib</Link>

        {/* Right side buttons */}
        <div className="space-x-4">
            <Link to='/login'>
          <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 transition">
            Login
          </button>
          </Link>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

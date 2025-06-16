import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaBook, FaUsers, FaLaptop } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
    <div className="relative">
      <Navbar />
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage: "url('/images/main-bg.jpg')", // ✅ note: public folder use karo
        }}
      >
        <div className="absolute inset-0"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to SmartLib</h1>
          <p className="mt-4 text-lg md:text-xl">
            Your smart digital library system
          </p>
        </div>
      </div>
    </div>
  <div className="py-16 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-1">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Digital Book Access</h3>
          <p>Access thousands of digital books, journals, and research materials anytime, anywhere.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaUsers className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
          <p>Designed for students and faculty with easy login, search, and tracking features.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaLaptop className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Online Management</h3>
          <p>Manage issuing, returning, and late fine calculation in a fully digital way.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBook, FaUsers, FaLaptop } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
    <div className="relative">
      <Navbar />
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage: "url('/images/main-bg.jpg')",
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
        <div className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/about-main.jpg" // ✅ Make sure image is in public/images/
            alt="Library"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About the Library</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            SmartLib is a modern digital library management system designed to simplify
            the process of managing books, users, and transactions. It provides a
            user-friendly interface for students and staff to easily access and manage
            resources.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our goal is to make libraries smarter by integrating technology, allowing for
            real-time tracking of issued books, reminders, digital catalogs, and efficient
            management of records.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;

import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link,useNavigate} from "react-router-dom";
import axios from '../../Axios';


const Register = () => {

    const navigate=useNavigate();
    const[user,setUser]=useState({});

    const handleValueChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser((prevUser)=>({...prevUser,[name]:value}));
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        await axios.post('/auth/register',user);
        alert('Your registration was successful! Please log in now.');
        navigate('/login');
      }catch(err){
        console.error(err.message);
        alert('Somthing Went Wrong');
      }
    }


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Student Registration
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleValueChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="userName"
                value={user.userName}
                onChange={handleValueChange}
                placeholder="username123"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Father's Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Father's Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={user.fatherName}
                onChange={handleValueChange}
                placeholder="Father's full name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleValueChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile No */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Mobile No
              </label>
              <input
                type="tel"
                name="mobile"
                value={user.mobile}
                onChange={handleValueChange}
                placeholder="10-digit number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Class */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Class
              </label>
              <input
                type="text"
                name="className"
                value={user.className}
                onChange={handleValueChange}
                placeholder="e.g. BCA, B.Tech"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Year / Semester */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Year / Semester
              </label>
              <input
                type="text"
                name="year"
                value={user.year}
                onChange={handleValueChange}
                placeholder="e.g. 2nd Year / 4th Sem"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleValueChange}
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Register
              </button>
            </div>

            {/* Already have account */}
            <div className="md:col-span-2 text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <Link to='/login' className="text-blue-600 hover:underline cursor-pointer">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;

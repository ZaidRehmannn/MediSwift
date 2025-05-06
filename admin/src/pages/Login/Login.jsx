import React, { useState } from 'react';
import { useMediSwiftAdmin } from '../../context/MediSwiftAdminContextProvider';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login({ url }) {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const { settoken } = useMediSwiftAdmin()
  const [errorMessage, seterrorMessage] = useState("")
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();
    let newUrl = url + '/api/user/login'
    const data = {
      loginIdentifier,
      password
    }

    try {
      const response = await axios.post(newUrl, data);
      console.log(response?.data?.user);
      console.log(response.data.token);
      if (response.data.success) {
        if (response?.data?.user?.userType == "admin") {
          localStorage.setItem("token", response.data.token);
          settoken(response.data.token);
          console.log("login success");
          navigate("../admin/add")
        } else {
          console.log("normal user");
        }
      } else {
        seterrorMessage(response.data.message);
      }
    } catch (err) {
      console.error("Login/Register error:", err);
      seterrorMessage("Something went wrong. Please try again later.");
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">

        <div className="bg-green-700 text-white px-6 py-6 text-center">
          <h1 className="text-xl font-medium">Admin Panel Login</h1>
        </div>

        <div className="px-6 py-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginIdentifier}
                onChange={(e) => setLoginIdentifier(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-600 text-sm -mt-2 font-semibold mb-5">{errorMessage}</div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition duration-300"
            >
              Sign In
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-green-700 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>

        <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-100">
          © 2025 MediSwift - Admin Portal
        </div>
      </div>
    </div>
  );
}

export default Login;
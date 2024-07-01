import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Import axiosInstance

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/login", {
        email,
        password,
      }); // Use axiosInstance
      console.log("Login API response:", response.data);
      localStorage.setItem("token", response.data.token);
      const token = localStorage.getItem("token");
      console.log("Stored token:", token);
      navigate("/pages/TimerPage");
    } catch (err) {
      setError(err.response.data.error);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-background-gradient">
      <div className="max-w-md w-full space-y-8 timer-card shadow-cardshadow bg-cardcolor rounded-2xl backdrop-blur-cardblur bg-opacity-30 lg:h-[30rem] lg:w-[28.75rem] flex flex-col justify-center px-10 py-3">
        <div>
          <div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-[#f2f2f2]">
              Log in
            </h2>
          </div>
          <form className="mt-10 space-y-7 pb-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-lg relative bg-[#051d6b] block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-gray-400 focus:text-white focus:outline-none focus:bg-[#132e83] focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative bg-[#051d6b] block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center px-3 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>
          <span className="text-white pt-4">
            Don't have an account?{" "}
            <Link
              to="/pages/SignUpPage"
              className="text-white font-extrabold gradient-text"
            >
              Sign Up
            </Link>
          </span>
        </div>
        <style>
          {`
            .timer-card {
              border: 2px rgba(19, 27, 144, 0.28) solid;
            }

            .bg-background-gradient {
              background: #000104;
              background-image:
                radial-gradient(closest-corner circle at 30% 70%, rgba(16, 23, 100, 1), rgba(4, 20, 72, 0)),
                radial-gradient(closest-corner circle at 95% 20%, rgba(4, 20, 72, 1) 5%, rgba(4, 20, 72, 0) 100%),
                radial-gradient(closest-corner circle at 10% 10%, rgba(16, 23, 100, 1) 0%, rgba(4, 20, 72, 0) 35%),
                radial-gradient(closest-corner circle at 65% 60%, rgba(4, 20, 72, 1) 5%, rgba(4, 20, 72, 0) 25%),
                radial-gradient(closest-corner circle at 92% 90%, rgba(16, 23, 100, 1) 0%, rgba(4, 20, 72, 0) 85%);
            }

            .gradient-text {
              background: rgb(196,193,255);
              background: linear-gradient(90deg, rgba(196,193,255,1) 0%, rgba(149,149,255,1) 35%, rgba(0,212,255,1) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            input:-webkit-autofill,
            textarea:-webkit-autofill,
            select:-webkit-autofill {
              -webkit-box-shadow: 0 0 0 1000px #051d6b inset !important;
              -webkit-text-fill-color: #c6d3e6 !important;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default LoginPage;

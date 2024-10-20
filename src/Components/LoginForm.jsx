import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
// import Register from "../Pages/Register";
function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center flex-col flex-wrap">
      <div>
        <img
          alt=""
          src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png"
          className="mx-auto h-16 w-auto mb-5"
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Welcome Back!
        </h2>
        <form>
          <div className="mb-6">
            <input
              type="text"
              id="username"
              placeholder="Your username"
              className="w-full px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Your password"
                className="w-full px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center justify-center cursor-pointer bg-[#FF5722] w-[40px] text-white"
              >
                <i
                  className={
                    passwordVisible ? "far fa-eye" : "far fa-eye-slash"
                  }
                ></i>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <a href="/" className="text-sm text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
            <a href="/" className="text-sm text-gray-600">
              By clicking login, I accept the{" "}
              <span className="text-purple-600 hover:underline">
                Terms & Conditions
              </span>
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF5722] text-white py-2 rounded-md text-[1.2rem] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          {/* <a href="/" className="text-purple-600 hover:underline">
            Register Now!
          </a> */}
          <Link className="text-purple-600 hover:underline" to="/register" >Register Now!</Link>
      </p>
      </div>
    </div>
  );
}

export default LoginForm;

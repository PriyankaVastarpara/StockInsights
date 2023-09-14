import React, { useState } from "react";
import LogoIcon from "../../assets/LogoIcon.png";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });

  const handleSubmit = () => {
    if (formData.Email === "priyankavastarpara@gmail.com" && formData.Password === "123") {
      onLogin(); // Call the onLogin function passed as a prop
    } else {
      alert("Please Enter Valid Username and Password!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen rounded bg-gray-100">
        <div className="w-full max-w-md p-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex">
              <img src={LogoIcon} alt="logo" className="w-[75px]" />
              <div className="flex-col">
                <div className="text-3xl font-semibold text-gray-600  ">
                  StockInsights
                </div>
                <span className="text-sm">Take Charge of Your Stock</span>
              </div>
            </div>
            <div className="border mt-6 p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Login
              </h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border border-blue-600"
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border border-blue-600 focus:shadow-outline"
                  id="Password"
                  name="Password"
                  type="password"
                  placeholder="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="uppercase text-center   md:px-[118px] lg:px-[140px] py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  LOGIN
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="text-blue-600 text-sm hover:text-blue-800">
                  Forgot Password ?
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;


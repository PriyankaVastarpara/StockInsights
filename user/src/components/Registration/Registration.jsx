import React, { useState } from "react";
import LogoIcon from "../../assets/LogoIcon.png";
import { Link ,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Registration = ({ onRegisterSuccess,onLoginRedirect }) => {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    // Name: "",
    email: "",
    password: "",
    // PhoneNo: ""
  });

  const generateError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/register",
        {
          ...values,
        },
        { withCredentials: true, }
      );
     
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          // navigate("/");
          onRegisterSuccess();
        }
      }
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen rounded bg-gray-100">
        <div className="w-full max-w-md p-4">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex">
              <img src={LogoIcon} alt="logo" className="w-[75px]" />
              <div className="flex-col">
                <div className="text-3xl font-semibold text-gray-600">
                  StockInsights
                </div>
                <span className="text-sm">Take Charge of Your Stock</span>
              </div>
            </div>
            <div className="border mt-6 p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Registration Account
              </h2>
              {/* <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border border-blue-600"
                  id="Name"
                  name="Name"
                  type="text"
                  placeholder="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                />
              </div> */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border border-blue-600"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  // value={formData.email}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border border-blue-600"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  // value={formData.password}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              {/* <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="confirmPassword"
                >
                 Phone No.
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border border-blue-600"
                  id="PhoneNo"
                  name="PhoneNo"
                  type="number"
                  placeholder="Phone No"
                  value={formData.PhoneNo}
                  onChange={handleInputChange}
                />
              </div> */}
              <div className="flex items-center justify-center">
        
                <button
                  className=" text-center md:px-[118px] lg:px-[140px] py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                 Register
                </button>
              
              </div>
              <span>
                Already have an account?<Link to="/login" onClick={onLoginRedirect}>Login</Link>
              </span>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Registration;

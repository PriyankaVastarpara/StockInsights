// import React from 'react'

// const Login = () => {
//   return (
//     <>
//     <>
//   {/* Hello world */}
//   <div className="flex justify-center">
//     <div className="h-[90%] w-full md:w-3/4 m-4">
//       <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
//         <h1 className="font-semibold text-3xl text-gray-700 m-2">Log In</h1>
//         <div className="flex">
//           <ion-icon
//             name="logo-google"
//             className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-violet-600 text-white bg-violet-600 hover:bg-white hover:text-violet-600 text-2xl"
//           ></ion-icon>
//           <ion-icon
//             name="logo-facebook"
//             className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 text-2xl"
//           ></ion-icon>
//         </div>
//         <div className="text-gray-700 font-semibold"> or </div>
//       </div>
//       <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
//         <div className="">
//           <input
//             type="text"
//             placeholder="Email"
//             className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
//           />
//         </div>
//         <div className="">
//           <input
//             type="password"
//             placeholder="Password"
//             className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
//           />
//         </div>
//         <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
//           <input className="" type="checkbox" id="checkbox" name="checkbox" />
//           <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">
//             Remember Me
//           </h3>
//         </div>
//       </div>
//       <div className="text-center mt-7">
//         <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">
//           login
//         </button>
//       </div>
//       <div className="text-center my-6 flex flex-col">
//         <a
//           href="#"
//           className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1"
//         >
//           Forgot Password ?
//         </a>
//         <a
//           href="#"
//           className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1"
//         >
//           Not a User? Create New Account
//         </a>
//       </div>
//     </div>
//   </div>
// </>

//     </>
//   )
// }

// export default Login

import React, { useState } from "react";
import LogoIcon from "../../assets/LogoIcon.png";
const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email=="priyankavastarpara@gmail.com" && password==123) {
      onLogin(); // Call the onLogin function passed as a prop
    }
    else{
      alert("Please Enter Valid Username and Password!");
    }
  };
      
  return (
    <>
      <div className="flex items-center justify-center min-h-screen rounded bg-gray-100">
        <div className="w-full max-w-md p-4">
         
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex">
            <img src={LogoIcon} alt="logo" className="w-[75px]"/>
            <div className="flex-col">
            <div className="text-3xl font-semibold text-gray-600  ">StockInsights</div>
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
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border border-blue-600 focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
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

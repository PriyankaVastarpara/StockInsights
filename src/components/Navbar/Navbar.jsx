
import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import User from "../../assets/user.jpg";
const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prevState) => !prevState);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-slate-200 text-white h-[60px] ">
      <div className="flex items-center">
        <img className="w-[260px]" src={Logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleOptions}
        >
          <img
            className="w-10 h-10 rounded-full"
            src={User}
            alt="Profile"
          />
          {showOptions && (
            <ul className="absolute right-1 w-36 mt-36 bg-blue-950 shadow-lg rounded-md text-center">
              <li className="px-4 py-2 border-b">My Account</li>
              <li className="px-4 py-2 border-b">Log Out</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

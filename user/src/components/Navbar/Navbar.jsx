import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const handleLogOut = () => navigate("/login");

  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-blue-950 text-white h-[60px] ">
      <div className="flex items-center ml-0">
        <img className="w-[260px]" src={Logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <button
          onClick={handleLogOut}
          className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

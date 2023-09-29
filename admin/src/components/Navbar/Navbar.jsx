
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {useCookies} from 'react-cookie';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
const [cookies,setCookie,removeCookie]=useCookies([]);

useEffect(() => {
  const verifyUser = async () => {
    if (!cookies.jwt) {
      navigate("/login");
    } else {
      const { data } = await axios.post("http://localhost:3000", {}, { withCredentials: true });
      if (!data.status) {
        removeCookie("jwt");
        navigate("/login");
      }
    }
  };

  verifyUser();
}, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    window.history.replaceState(null, "", "/login");
    navigate("/login");
  }

 
  return (
    <>  
    <nav className="flex items-center justify-between px-4 py-2 bg-blue-950 text-white h-[60px] ">
      <div className="flex items-center ml-0">
        <img className="w-[260px]" src={Logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <button
          onClick={logOut}
          className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Log out
        </button>
       
      </div>
    </nav>
     <ToastContainer/>
    </>
  );
};

export default Navbar;


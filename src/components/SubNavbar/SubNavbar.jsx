import React from 'react';
import {Link} from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';

const SubNavbar = (props) => {
  return (
    <>  
    <nav className="flex items-center justify-between bg-slate-100 px-4 py-1">
    {/* Title */}
      <div className="flex items-center">
        <span className="text-gray-700 font-bold text-lg">{props.title}</span>
      </div>

      {/* Search Bar */}
          {props.search}
      {/* New Button */}
      <div className="flex items-center justify-center"> 
      <Link to={props.link}>
         <button
      className="flex items-center bg-[#0D6EFD] hover:bg-blue-700 text-white font-semibold  py-1  px-2 rounded"
    >
      <AiOutlinePlus icon="pencil-alt" className="mr-1" />
        New
    </button>
    </Link> 
      </div>
    </nav>
    <hr className="h-px bg-slate-200 border-0"/>
    </>
  );
};

export default SubNavbar;

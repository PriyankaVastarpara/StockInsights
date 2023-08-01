import React from 'react';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';

const SubNavbar = ({title}) => {
  return (
    <>  
    <nav className="flex items-center justify-between bg-slate-100 px-4 py-1">
    {/* Title */}
      <div className="flex items-center">
        <span className="text-gray-700 font-bold text-lg">{title}</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <AiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-300" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 rounded-full bg-gray-200 focus:outline-none"
          />
        </div>
      </div>

      {/* New Button */}
      <div className="flex items-center justify-center">  
         <button
      className="flex items-center bg-[#0D6EFD] hover:bg-blue-700 text-white font-semibold  py-1  px-2 rounded"
    >
      <AiOutlinePlus icon="pencil-alt" className="mr-1" />
        New
    </button>
      </div>
    </nav>
    <hr className="h-px bg-slate-200 border-0"/>
    </>
  );
};

export default SubNavbar;


import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
      <input
        type="text"
        placeholder="Search by name"
        className="pl-9 pr-4 py-2 w-64 rounded-full bg-gray-200 focus:outline-none text-gray-800"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;


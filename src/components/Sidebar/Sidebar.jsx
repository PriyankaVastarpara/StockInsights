import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState, useContext } from "react";
import CustomerData from "../TableData/CustomerData";
import VendorData from "../TableData/VendorData";
import SubNavbar from "../SubNavbar/SubNavbar";
import SharedContext from "../../contexts/SharedContext";

const Sidebar = () => {
  const { menus } = useContext(SharedContext);
  const [open, setOpen] = useState(true);
  return (
    <>
      <section className="flex ">
        <div
          className={`bg-blue-950 min-h-screen ${
            open ? "w-60" : "w-14"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              className="cursor-pointer text-2xl"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 ">
            {menus.map((menu, index) => (
              <ul
                key={index}
                className="group flex items-center text-sm gap-3.5 font-medium p-1 hover:bg-blue-900 rounded-md"
              >
                <span>{menu.icon}</span>
                <span
                  style={{ transitionDelay: `${index + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28"
                  }`}
                >
                  {menu.name}
                  {/* 
                   <ul>
                    {menus.subMenu.map((sub) => (
                      <li>{sub}</li>
                    ))}
                  
                  </ul>  */}
                </span>
                <div
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </div>
              </ul>
            ))}
          </div>
        </div>
        <div className="w-screen">
          <SubNavbar />
          <CustomerData />
        </div>
      </section>
    </>
  );
};

export default Sidebar;

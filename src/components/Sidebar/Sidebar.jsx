import React, { useState, useContext } from "react";
import SharedContext from "../../contexts/SharedContext";
import { AiOutlineDown } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarMenus } = useContext(SharedContext);
  const [open, setOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <>
      <div
        className={`bg-blue-950 h-full ${
          open ? "w-60" : "w-14"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-2 flex justify-end">
          <HiMenuAlt3
            className="cursor-pointer text-2xl"
            onClick={() => setOpen(!open)}
          />
        </div>
        {sidebarMenus.map((menu, index) => (
          <div
            key={index}
            className="border-b bg-blue-950 border-[#154056] py-1"
          >
            {menu.menuName == "Dashboard" ||
            menu.menuName == "Vendors" ||
            menu.menuName == "Customers" ||
            menu.menuName == "Reports" ? (
              <Link
                to={menu.link}
                className="flex items-center w-full focus:outline-none hover:bg-[#207dac] text-gray-600 border-l-4 border-transparent hover:border-white pr-6 py-1 flex-row"
              >
                <span className=" text-white inline-flex justify-center items-center">
                  {menu.icon}
                </span>
                <span
                  className={`text-sm hidden sm:block tracking-wide truncate mx-2 text-white ${
                    !open && "opacity-0 translate-x-28 "
                  }`}
                >
                  {menu.menuName}
                </span>
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggleSubMenu(index)}
                  className="flex items-center w-full focus:outline-none hover:bg-[#207dac] text-gray-600 border-l-4 border-transparent hover:border-white pr-6 py-1 flex-row"
                >
                  <span className=" inline-flex text-white justify-center items-center">
                    {menu.icon}
                  </span>
                  <span
                    className="text-sm hidden sm:block tracking-wide truncate mx-2 text-white
                 "
                  >
                    {menu.menuName}
                  </span>
                  <AiOutlineDown className=" text-white ms-auto " />
                </button>

                {openSubMenu === index &&
                  menu.subMenus.map((subMenu, subIndex) => (
                    <Link
                      to={subMenu.link}
                      key={subIndex}
                      className={`flex flex-col text-white text-sm pl-8 pr-2 hover:bg-[#267399] w-full py-1 ${
                        !open && "hidden"
                      }`}
                    >
                      {subMenu.name}
                    </Link>
                  ))}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

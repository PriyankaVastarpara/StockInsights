import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { TbCategory } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { useState } from 'react';

const Sidebar = () => {
    const menus = [
        { name: "Dashboard", link: "/", icon: AiOutlineDashboard },
        { name: "Categories", link: "/", icon: TbCategory },
        { name: "Items", link: "/", icon: AiOutlineShoppingCart },
        { name: "Suppliers", link: "/", icon: BiUserCircle },
        { name: "Customers", link: "/", icon: CiUser },
    ];
    const [open, setOpen] = useState(true);
    return (
        <>       
      
        <section className="flex gap-6">
            <div className={`bg-blue-950 min-h-screen ${open ? "w-60" : "w-14"} duration-500 text-gray-100 px-4`}>
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>
                <div className="mt-4 flex flex-col gap-2 relative">
                    {
                        menus?.map((menu, index) =>

                            <ul key={index} className="group flex items-center text-sm gap-3.5 font-medium p-1 hover:bg-blue-900 rounded-md">
                                <div>
                                    {React.createElement(menu.icon, { size: 20 })}
                                </div>
                                <h2 style={{ transitionDelay: `${index + 3}00ms`, }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
                                <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                            </ul>
                        )}
                </div>
            </div>
            <div className='te'>
                react
            </div>
        </section>
        </>
    )
}

export default Sidebar;
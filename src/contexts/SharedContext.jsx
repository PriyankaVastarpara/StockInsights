import { createContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BiUserCircle,BiUser } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
const SharedContext = createContext();

export function SharedContextProvider({ children }) {
    const menus = [
        { name: "Dashboard",
        icon: <AiOutlineDashboard className="text-xl" /> },
        {
        name: "Items",
        icon: <CgShoppingCart className="text-xl" />,
        subMenus: ["Categories", "Products"]
        },
        {
        name: "vendors",
        icon: <BiUserCircle className="text-xl" />,
        },
        {
        name: "Customers",
        icon: <BiUser className="text-xl" />
        },
        {
        name: "Purchases",
        icon: <HiOutlineShoppingBag className="text-xl" />,
        subMenus: ["Purchase-Orders", "Purchase-Bills"]
        },
        {
        name: "Sales",
        icon: <CgShoppingCart className="text-xl" />,
        subMenus: ["Sales-Orders", "Sales-Bills"]
        },
        { name: "Reports", icon: <SlGraph className="text-xl" /> },
    ];

  const value = {
    menus,
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
}

export default SharedContext;

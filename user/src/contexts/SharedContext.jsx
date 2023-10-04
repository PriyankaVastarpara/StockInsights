import { createContext } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import {  BiUser } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";

const SharedContext = createContext();
export function SharedContextProvider({ children }) {
  
  const [customerData, setCustomerData] = useState([]);
  const [invoiceData, setInvoiceData] = useState([]);
  const [itemData, setItemData] = useState([]);

  
  useEffect(() => {
    getCustomerData();
    getInvoiceData();
    getItemData();

  }, []);

 
  const getCustomerData = async () => {
    const response = await axios.get("http://localhost:3000/customer/getall");
    setCustomerData(response?.data);
  };

  const getInvoiceData = async () => {
    const response = await axios.get("http://localhost:3000/invoice/getall");
    setInvoiceData(response?.data);
  };
  const getItemData = async () => {
    const response = await axios.get("http://localhost:3000/item/getall");
    setItemData(response?.data);
  };
 
  const sidebarMenus = [
    {
      menuName: "Dashboard",
      link: "/",
      icon: <AiOutlineDashboard className="text-xl" />,
    },
    {
      menuName: "Customers",
      link: "/customers",
      icon: <BiUser className="text-xl" />,
    },
    {
      menuName: "Sales",
      icon: <CgShoppingCart className="text-xl" />,
      subMenus: [
        { name: "Sales-Orders", link: "/sales-orders" },
        { name: "Sales-Invoices", link: "/sales-invoices" },
      ],
    },
  ];

  const formData = {
   
    customer: {
      fields: [
        { label: "Customer Name", type: "text", name: "CustomerName" },
        { label: "Code", type: "text", name: "Code", required: true },
        {
          label: "Customer Email",
          type: "Email",
          name: "Email",
          required: true,
        },
        { label: "Phone", type: "text", name: "Phone", required: true },
        { label: "Address", type: "textarea", name: "Address", required: true },
        { label: "Country", type: "text", name: "Country", required: true },
        { label: "State", type: "text", name: "State", required: true },
        { label: "City", type: "text", name: "City", required: true },
        { label: "Pin Code", type: "text", name: "Pincode", required: true },
        {
          label: "Created On",
          type: "date",
          name: "CreatedOnDate",
          required: true,
        },
      ],
    },
  
  
  };
  const tableData = {
    SalesInvoiceFields: [
      "SrNo",
      "Action",
      "Product",
      "Description",
      "Quantity",
      "Rate",
      "Discount",
      "Total",
    ],
  };
  
  const CustomerHeader = [
    "ID",
    "Name",
    "Code",
    "Email",
    "City",
    "Phone",
    "CreatedOn",
  ];
 
 
  const SalesOrderHeader=[
    "SrNo",
    "Customer",
    "OrderNo",
    "billNo",
    "Date",
    "SubTotal",
    "Discount",
    "Total",
    // "Status",
  ];
  const value = {
    sidebarMenus,
    formData,  
    customerData, 
    invoiceData,
    tableData,
    CustomerHeader,
    SalesOrderHeader,
    itemData
  
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
}

export default SharedContext;

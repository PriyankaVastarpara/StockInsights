import { useState, createContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BiUserCircle, BiUser } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import ActionBtn from "../components/TableData/ActionBtn.jsx";

const SharedContext = createContext();
export function SharedContextProvider({ children }) {
  const [categoryData, setCategoryData] = useState({});
  const [customerData, setCustomerData] = useState({});
  const [vendorData, setVendorData] = useState({});
  const [itemData, setItemData] = useState({});
  const menus = [
    { name: "Dashboard", icon: <AiOutlineDashboard className="text-xl" /> },
    {
      name: "Items",
      icon: <CgShoppingCart className="text-xl" />,
      subMenus: ["Categories", "Products"],
    },
    {
      name: "vendors",
      icon: <BiUserCircle className="text-xl" />,
    },
    {
      name: "Customers",
      icon: <BiUser className="text-xl" />,
    },
    {
      name: "Purchases",
      icon: <HiOutlineShoppingBag className="text-xl" />,
      subMenus: ["Purchase-Orders", "Purchase-Bills"],
    },
    {
      name: "Sales",
      icon: <CgShoppingCart className="text-xl" />,
      subMenus: ["Sales-Orders", "Sales-Bills"],
    },
    { name: "Reports", icon: <SlGraph className="text-xl" /> },
  ];
  const formData = {
    category: {
      fields: [
        { label: "Category Name", type: "text", name: "name", required: true },
        { label: "Code", type: "text", name: "code", required: true },
        {
          label: "Description",
          type: "textarea",
          name: "description",
          required: true,
        },
      ],
    },
    customer: {
      fields: [
        { label: "Customer Name", type: "text", name: "name", required: true },
        { label: "Code", type: "text", name: "code", required: true },
        {
          label: "Invoice No",
          type: "text",
          name: "invoiceno",
          required: true,
        },
        {
          label: "Customer Email",
          type: "email",
          name: "email",
          required: true,
        },
        { label: "Phone", type: "text", name: "phone", required: true },
        { label: "Address", type: "textarea", name: "address", required: true },
        {
          label: "Country",
          type: "select",
          name: "country",
          required: true,
          options: [
            { label: "India", value: "India" },
            { label: "US", value: "US" },
            { label: "UK", value: "UK" },
          ],
        },
        {
          label: "State",
          type: "select",
          name: "state",
          required: true,
          options: [
            { label: "Gujrat", value: "Gujrat" },
            { label: "MH", value: "MH" },
            { label: "MP", value: "MP" },
          ],
        },
        { label: "City", type: "text", name: "city", required: true },
        { label: "Pin Code", type: "text", name: "pincode", required: true },
      ],
    },
    vendor: {
      fields: [
        { label: "Vendor Name", type: "text", name: "name", required: true },
        { label: "Code", type: "text", name: "code", required: true },
        {
          label: "Invoice No",
          type: "text",
          name: "invoiceno",
          required: true,
        },
        {
          label: "Company Name",
          type: "text",
          name: "companyname",
          required: true,
        },
        { label: "Vendor Email", type: "email", name: "email", required: true },
        { label: "Phone", type: "text", name: "phone", required: true },
        { label: "Address", type: "textarea", name: "address", required: true },
        {
          label: "Country",
          type: "select",
          name: "country",
          required: true,
          options: [
            { label: "India", value: "India" },
            { label: "US", value: "US" },
            { label: "UK", value: "UK" },
          ],
        },
        {
          label: "State",
          type: "select",
          name: "state",
          required: true,
          options: [
            { label: "Gujrat", value: "Gujrat" },
            { label: "MH", value: "MH" },
            { label: "MP", value: "MP" },
          ],
        },
        { label: "City", type: "text", name: "city", required: true },
        { label: "Pin Code", type: "text", name: "pincode", required: true },
      ],
    },
    item: {
      fields: [
        { label: "Name", type: "text", name: "name", required: true },
        { label: "Code", type: "text", name: "code", required: true },
        {
          label: "Category",
          type: "select",
          name: "category",
          required: true,
          options: [
            { label: "Medicine", value: "Medicine" },
            { label: "Syrup", value: "Syrup" },
          ],
        },
        {
          label: "Description",
          type: "textarea",
          name: "description",
          required: true,
        },
        { label: "Stock Unit", type: "text", name: "stockunit", required: true },
        { label: "Quantity", type: "text", name: "quantity", required: true },
        {
          label: "Vendor",
          type: "select",
          name: "vendor",
          required: true,
          options: [
            { label: "Vendor 1", value: "vendor1" },
            { label: "Vendor 2", value: "vendor2" },
          ],
        },
        {
          label: "Manufacturer",
          type: "select",
          name: "manufacturer",
          required: true,
          options: [
            { label: "Manufacturer 1", value: "manufacturer1" },
            { label: "Manufacturer 2", value: "manufacturer2" },
          ],
        },
        {
          label: "Purchase Price",
          type: "text",
          name: "purchasePrice",
          required: true,
        },
        {
          label: "Unit Price",
          type: "text",
          name: "unitPrice",
          required: true,
        },
        { label: "Discount", type: "text", name: "discount", required: true },
        {
          label: "Selling Price",
          type: "text",
          name: "sellingPrice",
          required: true,
        },
        {
          label: "Reorder Point",
          type: "text",
          name: "reorderPoint",
          required: true,
        },
        {
          label: "Expiry Date",
          type: "date",
          name: "expiryDate",
          required: true,
        },
        {
          label: "Total Amount",
          type: "text",
          name: "totalAmount",
          required: true,
        },
      ],
    },
  };
  const tableData = {
    CategoryFields: [
      "SrNo",
      "Category",
      "Code",
      "Action",
    ],
    categoryTableData: [
      {
        srno:1,
        category:"Medicine",
        code:"M01",
        action:<ActionBtn />,
      },
      {
        srno:2,
        category:"Syrup",
        code:"S01",
        action:<ActionBtn />,
      },
    ],
    ItemFields: [
      "SrNo",
      "Product",
      "Code",
      "Category",
      "Qty",
      "Price",
      "Reorder",
      "Amount",
      "Action",
    ],
    itemTableData: [
      {
        srno:1,
        product:"Paracetamol",
        code:"001",
        category:"Medicine",
        qty:12,
        price:20,
        reorder:10,
        amount:240,
        action:<ActionBtn />,
      },
      {
        srno:2,
        product:"Dolo",
        code:"002",
        category:"Medicine",
        qty:12,
        price:20,
        reorder:10,
        amount:240,
        action:<ActionBtn />,
      },
    ],
    customerTableData: [
      {
        id: 1,
        name: "John Doe",
        code: "v1",
        invoiceno: 111,
        email: "john@example.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 2,
        name: "Jane Smith",
        code: "v2",
        invoiceno: 112,
        email: "jane@example.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 3,
        name: "Peter Doe ",
        code: "v3",
        invoiceno: 113,
        email: "peter@example.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
    ],
    CustomerFields: [
      "ID",
      "Name",
      "Code",
      "InvoiceNo",
      "Email",
      "City",
      "Phone",
      "Action",
    ],
    vendorTableData: [
      {
        id: 1,
        name: "John Doe",
        code: "v1",
        company: "aaa",
        invoiceno: 111,
        email: "john@example.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 2,
        name: "Jane Smith",
        code: "v2",
        company: "aaa",
        invoiceno: 112,
        email: "jane@example.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 3,
        name: "Peter Doe ",
        code: "v3",
        company: "aaa",
        invoiceno: 113,
        email: "peter@example.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
    ],
    VendorFields: [
      "ID",
      "Name",
      "Code",
      "Company",
      "InvoiceNo",
      "Email",
      "City",
      "Phone",
      "Action",
    ],
  };

  const value = {
    menus,
    formData,
    categoryData,
    setCategoryData,
    customerData,
    setCustomerData,
    vendorData,
    setVendorData,
    itemData,
    setItemData,
    tableData,
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
}

export default SharedContext;

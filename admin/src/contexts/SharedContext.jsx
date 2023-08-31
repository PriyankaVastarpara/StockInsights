import { createContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineDashboard, AiOutlineAppstore } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BiUserCircle, BiUser } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import axios from "axios";
import { useEffect, useState } from "react";

const SharedContext = createContext();
export function SharedContextProvider({ children }) {
  const [categoryData, setCategoryData] = useState({});
  const [customerData, setCustomerData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [purchaseBillData, setPurchaseBillData] = useState([]); 
  const [invoiceData, setInvoiceData] = useState([]);
  //this will store the items which has 0 quantity
  const outOfStockItems = itemData.filter(item => item.Quantity === 0);

   //this will store items which has low stock
   const lowStockItems = itemData.filter(item => item.Quantity < item.ReorderPoint && item.Quantity > 0);

   // Get the current date
   const currentDate = new Date();

   // Filter expired items
   const expiredItems = itemData.filter(item => new Date(item.
    ExpiryDate) < currentDate && item.Quantity > 0);

  useEffect(() => {
    getCategoryData();
    getCustomerData();
    getVendorData();
    getItemData();
    getPurchaseBillData();
    getInvoiceData();
  }, []);

  const getCategoryData = async () => {
    const response = await axios.get("http://localhost:3000/category/getall");
    setCategoryData(response?.data);
  };
  const getCustomerData = async () => {
    const response = await axios.get("http://localhost:3000/customer/getall");
    setCustomerData(response?.data);
  };

  const getVendorData = async () => {
    const response = await axios.get("http://localhost:3000/vendor/getall");
    setVendorData(response?.data);
  };

  const getItemData = async () => {
    const response = await axios.get("http://localhost:3000/item/getall");
    setItemData(response?.data);
  };
  const getPurchaseBillData = async () => {
    const response = await axios.get("http://localhost:3000/purchasebill/getall");
    setPurchaseBillData(response?.data);
  };
  const getInvoiceData = async () => {
    const response = await axios.get("http://localhost:3000/invoice/getall");
    setInvoiceData(response?.data);
  };
 
  const sidebarMenus = [
    {
      menuName: "Dashboard",
      link: "/",
      icon: <AiOutlineDashboard className="text-xl" />,
    },
    {
      menuName: "Items",
      icon: <AiOutlineAppstore className="text-xl" />,
      subMenus: [
        { name: "Categories", link: "/categories" },
        { name: "Products", link: "/products" },
      ],
    },
    {
      menuName: "Vendors",
      link: "/vendors",
      icon: <BiUserCircle className="text-xl" />,
    },
    {
      menuName: "Customers",
      link: "/customers",
      icon: <BiUser className="text-xl" />,
    },
    {
      menuName: "Purchases",
      icon: <HiOutlineShoppingBag className="text-xl" />,
      subMenus: [
        { name: "Purchase-Orders", link: "/purchase-orders" },
        { name: "Purchase-Bills", link: "purchase-bills" },
      ],
    },
    {
      menuName: "Sales",
      icon: <CgShoppingCart className="text-xl" />,
      subMenus: [
        { name: "Sales-Orders", link: "/sales-orders" },
        { name: "Sales-Invoices", link: "/sales-invoices" },
      ],
    },
    {
      menuName: "Reports",
      link: "/reports",
      icon: <SlGraph className="text-xl" />,
    },
  ];

  const formData = {
    category: {
      fields: [
        { label: "Category Name", type: "text", name: "CategoryName" },
        { label: "Code", type: "text", name: "Code", required: true },
        {
          label: "Description",
          type: "textarea",
          name: "Description",
        },
        { label: "Created On", type: "date", name: "CreatedOnDate" },
      ],
    },
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
        {
          label: "Country",
          type: "select",
          name: "Country",
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
          name: "State",
          required: true,
          options: [
            { label: "Gujarat", value: "Gujarat" },
            { label: "MH", value: "MH" },
            { label: "MP", value: "MP" },
          ],
        },
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
    vendor: {
      fields: [
        { label: "Vendor Name", type: "text", name: "VendorName" },
        { label: "Code", type: "text", name: "Code" },
        {
          label: "Company Name",
          type: "text",
          name: "CompanyName",
          required: true,
        },
        { label: "Vendor Email", type: "email", name: "Email" },
        { label: "Phone", type: "text", name: "Phone" },
        { label: "Address", type: "textarea", name: "Address" },
        {
          label: "Country",
          type: "select",
          name: "Country",
          options: [
            { label: "India", value: "India" },
            { label: "US", value: "US" },
            { label: "UK", value: "UK" },
          ],
        },
        {
          label: "State",
          type: "select",
          name: "State",
          options: [
            { label: "Gujarat", value: "Gujarat" },
            { label: "MH", value: "MH" },
            { label: "MP", value: "MP" },
          ],
        },
        { label: "City", type: "text", name: "City" },
        { label: "Pin Code", type: "text", name: "Pincode" },
        { label: "Created On", type: "date", name: "CreatedOnDate" },
      ],
    },
    item: {
      fields: [
        { label: "Name", type: "text", name: "ItemName" },
        { label: "Code", type: "text", name: "Code" },
        {
          label: "Category",
          type: "select",
          name: "Category",
          options: [
            { label: "Medicine", value: "Medicine" },
            { label: "Syrup", value: "Syrup" },
          ],
        },
        {
          label: "Description",
          type: "textarea",
          name: "Description",
        },
        {
          label: "Stock Unit",
          type: "text",
          name: "stockunit",
        },
        { label: "Quantity", type: "text", name: "quantity" },
        {
          label: "Vendor",
          type: "select",
          name: "Vendor",
          options: [
            { label: "Vendor 1", value: "vendor1" },
            { label: "Vendor 2", value: "vendor2" },
          ],
        },
        {
          label: "Manufacturer",
          type: "select",
          name: "manufacturer",
          options: [
            { label: "Manufacturer 1", value: "manufacturer1" },
            { label: "Manufacturer 2", value: "manufacturer2" },
          ],
        },
        {
          label: "Purchase Price",
          type: "text",
          name: "purchasePrice",
        },
        {
          label: "Unit Price",
          type: "text",
          name: "unitPrice",
        },
        { label: "Discount", type: "text", name: "discount" },
        {
          label: "Selling Price",
          type: "text",
          name: "sellingPrice",
        },
        {
          label: "Reorder Point",
          type: "text",
          name: "reorderPoint",
        },
        {
          label: "Expiry Date",
          type: "date",
          name: "expiryDate",
        },
        {
          label: "Total Amount",
          type: "text",
          name: "totalAmount",
        },
      ],
    },
  };
  const tableData = {
    PurchaseInvoiceFields: [
      "SrNo",
      "Action",
      "Product",
      "Description",
      "Quantity",
      "Rate",
      "Discount",
      "Total",
    ],

    

    salesOrderTableData: [
      {
        srno: 1,
        customer: "Priyanka Vts",
        orderno: 101,
        date: "30/07/2023",
        qty: 10,
        rate: 500,
        amount: 5000,
        discount: 1000,
        total: 4000,
        status: "pending",
      },
      {
        srno: 2,
        customer: "Isha Dave",
        orderno: 102,
        date: "30/07/2023",
        qty: 10,
        rate: 500,
        amount: 5000,
        discount: 1000,
        total: 4000,
        status: "pending",
      },
    ],
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
  const CategoryHeader = [
    { name: "SrNo", width: "w-8" },
    { name: "Category", width: "" },
    { name: "Code", width: "" },
    { name: "Description", width: "" },
    { name: "CreatedOn", width: "" },
  ];
  const CustomerHeader = [
    "ID",
    "Name",
    "Code",
    "Email",
    "City",
    "Phone",
    "CreatedOn",
  ];
  const VendorHeader = [
    "ID",
    "Code",
    "Name",
    "Company",
    "Email",
    "City",
    "Phone",
    "CreatedOn",
  ];
  const ItemHeader = [
    { name: "SrNo", width: "w-6" },
    { name: "Product", width: "w-4/12" },
    { name: "Code", width: "w-8" },
    { name: "Category", width: "" },
    { name: "Qty", width: "" },
    { name: "StockUnit", width: "" },
    { name: "UnitPrice", width: "w-8" },
    { name: "Amount", width: "w-8" },
    { name: "Reorder", width: "w-8" },
    { name: "ExpiryDate", width: "w-4/12" },
  ];
  const  PurchaseOrderHeader=[
    "SrNo",
    "Vendor",
    "OrderNo",
    "billNo",
    "Date",
    "SubTotal",
    "Discount",
    "Total",
    // "Status",
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
    categoryData,
    customerData,
    vendorData,
    itemData,
    purchaseBillData,
    invoiceData,
    tableData,
    CustomerHeader,
    VendorHeader,
    CategoryHeader,
    ItemHeader,
    PurchaseOrderHeader,
    SalesOrderHeader,
    outOfStockItems,
    lowStockItems,
    expiredItems
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
}

export default SharedContext;

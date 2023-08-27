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

  const dashboardData = [
    {
      name: "Low Stock Items",
      columns: ["Code", "Product", "Category", "Qty"],
      data: [
        ["IO-01", "Product_1", "Category_1", 12],
        ["IO-02", "Product_2", "Category_2", 8],
        ["IO-03", "Product_3", "Category_3", 5],
      ],
    },
    {
      name: "Out Of Stock Items",
      columns: ["Code", "Product", "Category"],
      data: [
        ["OS-01", "Product_1", "Category_1"],
        ["OS-02", "Product_2", "Category_2"],
        ["OS-03", "Product_3", "Category_3"],
      ],
    },
    {
      name: "Recent Sales Orders",
      columns: ["Invoice No", "Customer Name", "Amount", "Status"],
      data: [
        ["IO-01", "Priyanka vts", "₹ 80,000", "Paid"],
        ["IO-02", "Kriyanshi Kamani", "₹ 70,000", "Paid"],
        ["IO-03", "Priyansi Jadeja", "₹ 75,000", "UnPaid"],
      ],
    },
    {
      name: "Recent Purchase Orders",
      columns: ["Bill No", "Vendor Name", "Amount", "Status"],
      data: [
        ["BAO-01", "Priyanka vts", "₹ 80,000", "Paid"],
        ["BAO-02", "Kriyanshi Kamani", "₹ 70,000", "Paid"],
        ["BAO-03", "Priyansi Jadeja", "₹ 75,000", "UnPaid"],
      ],
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
  const reports = {
    LowStockFields: [
      { name: "SrNo", width: "w-6" },
      { name: "Code", width: "" },
      { name: "Product", width: "" },
      { name: "Category", width: "" },
      { name: "Supplier", width: "" },
      { name: "StockUnit", width: "" },
      { name: "UnitPrice", width: "" },
      { name: "ReorderQty", width: "w-20" },
      { name: "OnHand", width: "w-8" },
    ],
    LowStockData: [
      {
        srno: 1,
        code: "PD-001",
        product: "Paracetamol",
        category: "Medicine",
        supplier: "Supplier-1",
        stockunit: "box",
        unitprice: 5000,
        reorderqty: 12,
        onhand: 8,
      },
      {
        srno: 2,
        code: "PD-002",
        product: "Dolo",
        category: "Medicine",
        supplier: "Supplier-2",
        stockunit: "box",
        unitprice: 8000,
        reorderqty: 18,
        onhand: 12,
      },
    ],
    OutOfStockFields: [
      { name: "SrNo", width: "w-6" },
      { name: "Code", width: "" },
      { name: "Product", width: "" },
      { name: "Category", width: "" },
      { name: "Supplier", width: "" },
      { name: "StockUnit", width: "" },
      { name: "UnitPrice", width: "" },
      { name: "ReorderQuantity", width: "w-20" },
    ],
    OutOfStockData: [
      {
        srno: 1,
        code: "PD-001",
        product: "Paracetamol",
        category: "Medicine",
        supplier: "Supplier-1",
        stockunit: "box",
        unitprice: 5000,
        reorderquantity: 12,
      },
      {
        srno: 2,
        code: "PD-002",
        product: "Dolo",
        category: "Medicine",
        supplier: "Supplier-2",
        stockunit: "box",
        unitprice: 8000,
        reorderquantity: 18,
      },
    ],
  };
  const value = {
    sidebarMenus,
    dashboardData,
    formData,
    categoryData,
    customerData,
    vendorData,
    itemData,
    purchaseBillData,
    invoiceData,
    tableData,
    reports,
    CustomerHeader,
    VendorHeader,
    CategoryHeader,
    ItemHeader,
    PurchaseOrderHeader,
    SalesOrderHeader
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
}

export default SharedContext;

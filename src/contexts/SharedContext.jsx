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

  const sidebarMenus = [
    {
      menuName: "Dashboard",
      link: "/",
      icon: <AiOutlineDashboard className="text-xl" />,
    },
    {
      menuName: "Items",
      icon: <CgShoppingCart className="text-xl" />,
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
      columns: ["Code", "Product","Category", "Qty"],
      data: [
        ["IO-01", "Product_1", "Category_1",12],
        ["IO-02", "Product_2", "Category_2",8],
        ["IO-03", "Product_3", "Category_3",5],
      ],
    },
    {
      name: "Out Of Stock Items",
      columns: ["Code", "Product","Category"],
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
        {
          label: "Stock Unit",
          type: "text",
          name: "stockunit",
          required: true,
        },
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
    CategoryFields: ["SrNo", "Category", "Code", "Action"],
    categoryTableData: [
      {
        srno: 1,
        category: "Medicine",
        code: "M01",
        action: <ActionBtn />,
      },
      {
        srno: 2,
        category: "Syrup",
        code: "S01",
        action: <ActionBtn />,
      },
    ],
    ItemFields: [
      "SrNo",
      "Product",
      "Code",
      "Category",
      "Qty",
      "StockUnit",
      "Price",
      "Reorder",
      "Amount",
      "Action",
    ],
    itemTableData: [
      {
        srno: 1,
        product: "Paracetamol",
        code: "001",
        category: "Medicine",
        qty: 12,
        stockunit: "box",
        price: 20,
        reorder: 10,
        amount: 240,
        action: <ActionBtn />,
      },
      {
        srno: 2,
        product: "Dolo",
        code: "002",
        category: "Medicine",
        qty: 12,
        stockunit: "pcs",
        price: 20,
        reorder: 10,
        amount: 240,
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
    customerTableData: [
      {
        id: 1,
        name: "Priyanka Vts",
        code: "v1",
        invoiceno: 111,
        email: "priyankna@gmail.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 2,
        name: "Kriyanshi Kamani",
        code: "v2",
        invoiceno: 112,
        email: "kriyanshi@example.com",
        city: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 3,
        name: "Priyansi Jadeja ",
        code: "v3",
        invoiceno: 113,
        email: "priyansi@example.com",
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
    PurchaseOrderFields: [
      "SrNo",
      "Vendor",
      "OrderNo",
      "Date",
      "Qty",
      "Rate",
      "Amount",
      "Discount",
      "Total",
      "Status",
      "Action",
    ],
    purchaseOrderTableData: [
      {
        srno: 1,
        vendor: "Priyanka Vts",
        orderno: "S-11",
        date: "30/07/2023",
        qty: 5,
        rate: 100,
        amount: 500,
        discount: 100,
        total: 400,
        status: "pending",
        action: <ActionBtn />,
      },
      {
        srno: 2,
        vendor: "Isha Dave",
        orderno: "S-12",
        date: "30/07/2023",
        qty: 8,
        rate: 100,
        amount: 800,
        discount: 200,
        total: 600,
        status: "completed",
        action: <ActionBtn />,
      },
    ],
    PurchaseInvoiceFields: [
      "SrNo",
      "Action",
      "Item",
      "Description",
      "Quantity",
      "Rate",
      "Discount",
      "Total",
    ],
    // purchaseInvoiceTableData: [
    //   {
    //     srno:1,
    //     itemdetails:"Medicine",
    //     quantity:10,
    //     rate:100,
    //     discount:100,
    //     amount:900
    //   },
    // ],
    SalesOrderFields: [
      "SrNo",
      "Customer",
      "OrderNo",
      "Date",
      "Qty",
      "Rate",
      "Amount",
      "Discount",
      "Total",
      "Status",
      "Action",
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
        action: <ActionBtn />,
      },
      {
        srno: 1,
        customer: "Isha Dave",
        orderno: 102,
        date: "30/07/2023",
        qty: 10,
        rate: 500,
        amount: 5000,
        discount: 1000,
        total: 4000,
        status: "pending",
        action: <ActionBtn />,
      },
    ],
    SalesInvoiceFields: [
      "SrNo",
      "Action",
      "Item",
      "Description",
      "Quantity",
      "Rate",
      "Discount",
      "Total",
    ],
    // salesInvoiceTableData: [
    //   {
    //     srno:1,
    //     itemdetails:"Medicine",
    //     quantity:10,
    //     rate:100,
    //     discount:100,
    //     amount:900
    //   },
    // ]
  };

  const value = {
    sidebarMenus,
    dashboardData,
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

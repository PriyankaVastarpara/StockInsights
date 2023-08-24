import { useState, createContext } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BiUser} from "react-icons/bi";

const SharedContext = createContext();
export function SharedContextProvider({ children }) {
 
  const [customerData, setCustomerData] = useState({});
  const [newSalesOrderData, setNewSalesOrderData] = useState({});
  
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
    customer: {
      fields: [
        { label: "Customer Name", type: "text", name: "name", required: true },
        { label: "Code", type: "text", name: "code", required: true },
        {
          label: "Order No",
          type: "text",
          name: "orderno",
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
            { label: "Gujarat", value: "Gujarat" },
            { label: "MH", value: "MH" },
            { label: "MP", value: "MP" },
          ],
        },
        { label: "City", type: "text", name: "city", required: true },
        { label: "Pin Code", type: "text", name: "pincode", required: true },
        { label: "Created On", type: "date", name: "date", required: true },
      ],
    },
  
    newsalesorder: {
      fields: [
        {
          label: "Customer Name",
          type: "select",
          name: "customer",
          id: "customer",
          required: true,
          options: [
            { label: "Customer1", value: "Customer1" },
            { label: "Customer2", value: "Customer2" },
            { label: "Customer3", value: "Customer3" },
          ],
        },
        {
          label: "Sales Order No",
          type: "text",
          name: "salesorderno",
          id: "salesorderno",
          required: true,
        },
        {
          label: "Order Date",
          type: "date",
          name: "date",
          id: "date",
          required: true,
        },
        {
          label: "Expected Shipment Date",
          type: "date",
          name: "shipmentdate",
          id: "shipmentdate",
          required: true,
        },
      ],
    },
   
  };
  const tableData = {
    CustomerFields: ["ID", "Name", "Code", "OrderNo", "Email", "City", "Phone","CreatedOn"],
    customerTableData: [
      {
        id: 1,
        name: "Priyanka Vts",
        code: "v1",
        orderno: "SO-112",
        email: "priyankna@gmail.com",
        city: "Rajkot",
        phone: "1234567890",
        createdon:"27-07-2023"
      },
      {
        id: 2,
        name: "Kriyanshi Kamani",
        code: "v2",
        orderno: "SO-113",
        email: "kriyanshi@example.com",
        city: "Rajkot",
        phone: "1234567890",
        createdon:"27-07-2023"
      },
      {
        id: 3,
        name: "Priyansi Jadeja ",
        code: "v3",
        orderno: "SO-114",
        email: "priyansi@example.com",
        city: "Rajkot",
        phone: "1234567890",
        createdon:"27-07-2023"
      },
    ],

    
    NewSalesOrderFields: [
      "SrNo",
      "Action",
      "ProductDetails",
      "Quantity",
      "Rate",
      "Discount",
      "Amount",
    ],
   

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
      "Item",
      "Description",
      "Quantity",
      "Rate",
      "Discount",
      "Total",
    ],
  };

 
  const value = {
    sidebarMenus,
    dashboardData,
    formData,
    customerData,
    setCustomerData, 
    newSalesOrderData,
    setNewSalesOrderData,
    tableData,
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
}

export default SharedContext;

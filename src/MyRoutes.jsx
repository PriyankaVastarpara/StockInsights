import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import DashBoard from './components/DashBoard/DashBoard.jsx';
import AddCategory from "./components/AddCategory/AddCategory.jsx";
import AddCustomers from "./components/AddCustomers/AddCustomers.jsx";
import AddVendors from "./components/AddVendors/AddVendors.jsx";
import AddItems from "./components/AddItems/AddItems.jsx";
import SubNavbar from "./components/SubNavbar/SubNavbar.jsx";
import CategoryData from "./components/TableData/CategoryData.jsx";
import ItemData from "./components/TableData/ItemData.jsx";
import CustomerData from "./components/TableData/CustomerData.jsx";
import VendorData from "./components/TableData/VendorData.jsx";
import Drag from "./components/Drag.jsx";
import SalesInvoice from "./components/SalesInvoice/SalesInvoice.jsx";
import NewSalesOrder from "./components/NewSalesOrder/NewSalesOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import SalesOrderData from "./components/TableData/SalesOrderData.jsx";
import PurchaseOrderData from "./components/TableData/PurchaseOrderData.jsx";
import NewPurchaseOrder from "./components/NewPurchaseOrder/NewPurchaseOrder.jsx";
import PurchaseInvoice from "./components/PurchaseBill/PurchaseBill.jsx";
import Reports from './components/Reports/Reports.jsx';
import { Routes ,Route} from 'react-router-dom';
const MyRoutes = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/addcategory" element={<AddCategory/>}/>
        <Route path="/categories" element={<CategoryData/>}/>
        <Route path="/additem" element={<AddItems/>}/>
        <Route path="/products" element={<ItemData/>}/>
        <Route path="/addvendor" element={<AddVendors/>}/>
        <Route path="/vendors" element={<VendorData/>}/>
        <Route path="/addcustomer" element={<AddCustomers/>}/>
        <Route path="/customers" element={<CustomerData/>}/>
        <Route path="/newpurchase" element={<NewPurchaseOrder/>}/>
        <Route path="/purchase-orders" element={<PurchaseOrderData/>}/>
        <Route path="/purchase-bills" element={<PurchaseInvoice/>}/>
        <Route path="/newsale" element={<NewSalesOrder/>}/>
        <Route path="/sales-orders" element={<SalesOrderData/>}/>
        <Route path="/sales-invoices" element={<SalesInvoice/>}/>
        <Route path="/reports" element={<Reports/>}/>
    </Routes>
  </>
  )
}

export default MyRoutes
import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import AddCategory from "./components/AddCategory/AddCategory.jsx";
import AddCustomers from "./components/AddCustomers/AddCustomers.jsx";
import AddVendors from "./components/AddVendors/AddVendors.jsx";
import AddItems from "./components/AddItems/AddItems.jsx";
import CategoryData from "./components/TableData/CategoryData.jsx";
import ItemData from "./components/TableData/ItemData.jsx";
import CustomerData from "./components/TableData/CustomerData.jsx";
import VendorData from "./components/TableData/VendorData.jsx";
import SalesInvoice from "./components/SalesInvoice/SalesInvoice.jsx";
import SalesOrderData from "./components/TableData/SalesOrderData.jsx";
import PurchaseOrderData from "./components/TableData/PurchaseOrderData.jsx";
import PurchaseInvoice from "./components/PurchaseBill/PurchaseBill.jsx";
import UpdatePurchaseBills from './components/UpdatePurchaseBills/UpdatePurchaseBills.jsx';
import Reports from './components/Reports/Reports.jsx';
import LowStock from './components/Reports/Inventory/LowStock.jsx';
import OutOfStock from './components/Reports/Inventory/OutOfStock.jsx';
import SalesByCustomer from './components/Reports/SalesReport/SalesByCustomer.jsx';
import SalesByItem from './components/Reports/SalesReport/SalesByItem.jsx';
import PrintInvoice from './components/Invoice/PrintInvoice.jsx';
import PrintBill from './components/Invoice/PrintBill.jsx';
import UpdateSalesInvoices from './components/UpdateSalesInvoices/UpdateSalesInvoices.jsx';
const MyRoutes = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addcategory" element={<AddCategory/>}/>
        <Route path="/categories" element={<CategoryData/>}/>
        <Route path="/additem" element={<AddItems/>}/>
        <Route path="/products" element={<ItemData/>}/>
        <Route path="/addvendor" element={<AddVendors/>}/>
        <Route path="/vendors" element={<VendorData/>}/>
        <Route path="/addcustomer" element={<AddCustomers/>}/>
        <Route path="/customers" element={<CustomerData/>}/>
        <Route path="/purchase-orders" element={<PurchaseOrderData/>}/>
        <Route path="/purchase-bills" element={<PurchaseInvoice/>}/>
        <Route path="/print-bill" element={<PrintBill/>}/>
        <Route path="/sales-orders" element={<SalesOrderData/>}/>
        <Route path="/sales-invoices" element={<SalesInvoice/>}/>
        <Route path="/print-invoice" element={<PrintInvoice/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/lowstock" element={<LowStock/>}/>
        <Route path="/outofstock" element={<OutOfStock/>}/>
        <Route path="/sales-by-customer" element={<SalesByCustomer/>}/>
        <Route path="/sales-by-item" element={<SalesByItem/>}/>
        <Route path="/update-purchase-bills" element={<UpdatePurchaseBills/>}/>
        <Route path="/update-sales-invoices" element={<UpdateSalesInvoices/>}/>
    </Routes>
  </>
  )
}

export default MyRoutes
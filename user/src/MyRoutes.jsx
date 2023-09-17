import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import AddCustomers from "./components/AddCustomers/AddCustomers.jsx";
import CustomerData from "./components/TableData/CustomerData.jsx";
import SalesInvoice from "./components/SalesInvoice/SalesInvoice.jsx";
import SalesOrderData from "./components/TableData/SalesOrderData.jsx";
import Registration from "./components/Registration/Registration.jsx";

import PrintInvoice from "./components/Invoice/PrintInvoice.jsx";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/addcustomer" element={<AddCustomers />} />
        <Route path="/customers" element={<CustomerData />} />
        <Route path="/sales-orders" element={<SalesOrderData />} />
        <Route path="/sales-invoices" element={<SalesInvoice />} />
        <Route path="/print-invoice/:formData" element={<PrintInvoice />} />
      </Routes>
    </>
  );
};

export default MyRoutes;

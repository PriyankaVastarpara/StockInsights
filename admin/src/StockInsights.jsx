import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import MyRoutes from "./MyRoutes";
const StockInsights = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className=" w-screen">
        <Navbar />
      </div>

      <div className="flex flex-row">
        <aside className="flex flex-col w-auto bg-blue-900 border-r min-h-screen">
          <Sidebar />
        </aside>
        <div className="flex-auto p-6 overflow-y-scroll bg-gray-100">
          <MyRoutes />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default StockInsights;

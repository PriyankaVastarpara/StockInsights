import React from "react";
import {Link} from "react-router-dom";

const Reports = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 p-8">
        {/* <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-600 mb-4">Sales</h1>
            <ul className="space-y-2">
             <Link to="/sales-by-customer"> <li className="text-blue-500 hover:text-blue-700">
                Sales by Customer
              </li></Link>
              <hr className="border border-dashed" />
            </ul>
            <ul className="space-y-2">
            <Link to="/sales-by-item"> <li className="text-blue-500 hover:text-blue-700 my-1">
                Sales by Item
              </li></Link>
              <hr className="border border-dashed" />
            </ul>
          </div> 
        </div> */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-600 mb-4">
              Inventory
            </h1>
           
            <ul className="space-y-2">
            <Link to="/lowstock"> <li className="text-blue-500 hover:text-blue-700 my-1">
                Low Stock Items
              </li></Link>
              <hr className="border border-dashed" />
            </ul>
            <ul className="space-y-2">
            <Link to="/outofstock"> <li className="text-blue-500 hover:text-blue-700 my-1">
                Out of Stock Items
              </li></Link>
              <hr className="border border-dashed" />
            </ul>
            {/* <ul className="space-y-2">
              <li className="text-blue-500 hover:text-blue-700 my-1">
                Stock Summary Report
              </li>
              <hr className="border border-dashed" />
            </ul> */}
          </div>
        </div>
        {/* <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-600 mb-4">Purchase</h1>
            <ul className="space-y-2">
              <li className="text-blue-500 hover:text-blue-700">
                Purchase by Vendor
              </li>
              <hr className="border border-dashed" />
            </ul>
            <ul className="space-y-2">
              <li className="text-blue-500 hover:text-blue-700 my-1">
                Purchase by Item
              </li>
              <hr className="border border-dashed" />
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Reports;

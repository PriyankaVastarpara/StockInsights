import React from "react";
import {Link} from "react-router-dom";

const Reports = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 p-8">
      
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
            <ul className="space-y-2">
            <Link to="/expireditems"> <li className="text-blue-500 hover:text-blue-700 my-1">
                Expired Items
              </li></Link>
              <hr className="border border-dashed" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;

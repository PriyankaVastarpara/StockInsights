import React, { useContext,useEffect } from "react";
import Sales from "../../assets/Sales.png";
import SharedContext from "../../contexts/SharedContext";
import {useCookies} from 'react-cookie';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const DashBoard = () => {
  const { invoiceData } = useContext(SharedContext);

  //for fetch recent 5 records
  const recentSalesOrders = invoiceData.slice(-5).reverse();
  if (!recentSalesOrders) {
    return null; // Handle case when data is not found
  }

  const totalSale = invoiceData.reduce(
    (sum, invoice) => sum + invoice.total,
    0
  );

  return (
    <>
      <div>
        {/* Card content */}
        <div className=" mt-3 pt-3 grid grid-cols-3 gap-14  place-content-evenly  ">
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" w-1/3 flex-shrink-0 border-r border-gray-300">
              <img
                src={Sales}
                alt="sales"
                className="w-fit h-24 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-lg font-semibold mb-1 text-center">Sales</h2>
              <p className="text-gray-600 text-xl">₹ {totalSale}</p>
            </div>
          </div>
        </div>

        <div className=" mt-10 grid grid-cols-2 gap-10  place-content-evenly">
          {/* Recent Sales orders */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Last 5 Sales Orders</h2>
            <table className="w-full bg-white shadow-md rounded">
              <thead>
                <tr className="bg-blue-950 text-white text-sm leading-normal">
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    SrNo
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    InvoiceNo
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Customer
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentSalesOrders.map((item, index) => (
                  <tr
                    key={item._id}
                    className={
                      index % 2 === 0 ? "bg-gray-100 text-left" : "text-left"
                    }
                  >
                    <td className="py-2 px-2 text-left whitespace-nowrap ">
                      {index + 1}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.billNo}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.CustomerName}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

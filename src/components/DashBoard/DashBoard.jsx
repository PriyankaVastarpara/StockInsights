import React from "react";
import User from "../../assets/user.jpg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";
const DashBoard = () => {
  const { dashboardData } = useContext(SharedContext);
  // Filter the array to get the  data
  const lowStockData = dashboardData.filter(
    (data) => data.name === "Low Stock Items"
  )[0];
  const OutOfStockData = dashboardData.filter(
    (data) => data.name === "Out Of Stock Items"
  )[0];
  const RecentSales = dashboardData.filter(
    (data) => data.name === "Recent Sales Orders"
  )[0];
  const RecentPurchases = dashboardData.filter(
    (data) => data.name === "Recent Purchase Orders"
  )[0];

  if (!lowStockData) {
    return null; // Handle case when data is not found
  }
  if (!OutOfStockData) {
    return null; // Handle case when data is not found
  }
  if (!RecentSales) {
    return null; // Handle case when data is not found
  }
  if (!RecentPurchases) {
    return null; // Handle case when data is not found
  }
  return (
    <>
      <div>
        <div className="flex justify-end">
        <Link to="/products"><button
            type="submit"
            className="bg-blue-950 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none border focus:border-blue-300"
          >
            Products
          </button>
          </Link>
          <Link to="/reports">
          <button
            type="submit"
            className="bg-blue-950 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none border focus:border-blue-300"
          >
            Generate Reports
          </button>
          </Link>
        </div>
        {/* Card content */}
        <div className=" mt-3 pt-3 grid grid-cols-3 gap-14  place-content-evenly  ">
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" flex-shrink-0 border-r border-gray-300">
              <img
                src={User}
                alt="sales"
                className="w-fit h-28 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-lg font-semibold mb-1 text-center">Sales</h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" flex-shrink-0 border-r border-gray-300">
              <img
                src={User}
                alt="Purchases"
                className="w-fit h-28 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Purchases
              </h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" flex-shrink-0 border-r border-gray-300">
              <img
                src={User}
                alt="Purchases"
                className="w-fit h-28 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Quantity On Hand
              </h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" flex-shrink-0 border-r border-gray-300">
              <img
                src={User}
                alt="Receivable"
                className="w-fit h-28 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Receivable
              </h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" flex-shrink-0 border-r border-gray-300">
              <img
                src={User}
                alt="Payable"
                className="w-fit h-28 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Payable
              </h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" flex-shrink-0 border-r border-gray-300">
              <img
                src={User}
                alt="Net Profit"
                className="w-fit h-28 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center ">
                Net Profit
              </h2>
              <p className="text-xl font-bold text-[#32de84]">₹ 0.00</p>
            </div>
          </div>
        </div>
        {/* Tables started */}
        <div className=" mt-10 grid grid-cols-2 gap-10  place-content-evenly">
          {/* Low Stock Item Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{lowStockData.name}</h2>
            <table className="w-full bg-white shadow-md rounded">
              <thead>
                <tr className="bg-blue-950 text-white  text-sm leading-normal">
                  {lowStockData.columns.map((column, index) => (
                    <th key={index} className="py-3 px-6 text-left">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-medium">
                {lowStockData.data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="py-3 px-6 text-left whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Out of Stock Items */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {OutOfStockData.name}
            </h2>
            <table className="w-full bg-white shadow-md rounded">
              <thead>
                <tr className="bg-blue-950 text-white text-sm leading-normal">
                  {OutOfStockData.columns.map((column, index) => (
                    <th key={index} className="py-3 px-6 text-left">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-medium">
                {OutOfStockData.data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="py-3 px-6 text-left whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Recent Sales orders */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{RecentSales.name}</h2>
            <table className="w-full bg-white shadow-md rounded">
              <thead>
                <tr className="bg-blue-950 text-white text-sm leading-normal">
                  {RecentSales.columns.map((column, index) => (
                    <th key={index} className="py-3 px-6 text-left">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-medium">
                {RecentSales.data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="py-3 px-6 text-left whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Recent Purchase orders */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {RecentPurchases.name}
            </h2>
            <table className="w-full bg-white shadow-md rounded">
              <thead>
                <tr className="bg-blue-950 text-white text-sm leading-normal">
                  {RecentPurchases.columns.map((column, index) => (
                    <th key={index} className="py-3 px-6 text-left">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-medium">
                {RecentPurchases.data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="py-3 px-6 text-left whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
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

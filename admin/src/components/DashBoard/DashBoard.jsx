import React, { useContext } from "react";
import Sales from "../../assets/Sales.png";
import Purchase from "../../assets/Purchase.png";
import Quantity from "../../assets/Quantity.png";
import Receivable from "../../assets/receivable.png";
import Payable from "../../assets/Payable.png";
import Profit from "../../assets/Profit.png";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";
const DashBoard = () => {
  const {
    dashboardData,
    purchaseBillData,
    invoiceData,
    lowStockItems,
    outOfStockItems,
  } = useContext(SharedContext);
  

  const RecentSales = dashboardData.filter(
    (data) => data.name === "Recent Sales Orders"
  )[0];
  const RecentPurchases = dashboardData.filter(
    (data) => data.name === "Recent Purchase Orders"
  )[0];

  if (!lowStockItems) {
    return null; // Handle case when data is not found
  }
  if (!outOfStockItems) {
    return null; // Handle case when data is not found
  }
  if (!RecentSales) {
    return null; // Handle case when data is not found
  }
  if (!RecentPurchases) {
    return null; // Handle case when data is not found
  }

  //calculate total purchases and sales
  const totalPurchase = purchaseBillData.reduce(
    (sum, invoice) => sum + invoice.total,
    0
  );
  const totalSale = invoiceData.reduce(
    (sum, invoice) => sum + invoice.total,
    0
  );

  return (
    <>
      <div>
        <div className="flex justify-end">
          <Link to="/products">
            <button
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
          <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" w-1/3 flex-shrink-0 border-r border-gray-300">
              <img
                src={Purchase}
                alt="Purchases"
                className="w-fit h-24 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Purchases
              </h2>
              <p className="text-gray-600 text-xl">₹ {totalPurchase}</p>
            </div>
          </div>
          {/* <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className="w-1/3 flex-shrink-0 border-r border-gray-300">
              <img
                src={Quantity}
                alt="quantity"
                className="w-fit h-24 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Quantity On Hand
              </h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" w-1/3 flex-shrink-0 border-r border-gray-300">
              <img
                src={Receivable}
                alt="Receivable"
                className="w-fit h-24 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Receivable
              </h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" w-1/3 flex-shrink-0 border-r border-gray-300">
              <img
                src={Payable}
                alt="Payable"
                className="w-fit h-24 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center">
                Payable
              </h2>
              <p className="text-gray-600 text-xl">₹ 0.00</p>
            </div>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow-lg flex text-center items-center justify-center ">
            <div className=" w-1/3 flex-shrink-0 border-r border-gray-300">
              <img
                src={Profit}
                alt="Net Profit"
                className="w-fit h-24 p-2 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-2 w-2/3">
              <h2 className="text-xl font-semibold mb-1 text-center ">
                Net Profit
              </h2>
              <p className="text-xl font-bold text-[#32de84]">₹ 0.00</p>
            </div>
          </div>  */}
        </div>

        <div className=" mt-10 grid grid-cols-2 gap-10  place-content-evenly">
          {/* Low Stock Item Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Low Stock Items</h2>
            <table className="w-full bg-white shadow-md rounded">
              <thead>
                <tr className="bg-blue-950 text-white text-sm leading-normal">
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    SrNo
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Code
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Product
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {lowStockItems.map((item, index) => (
                  <tr
                    key={item._id}
                    className={index % 2 === 0 ? "bg-gray-100 text-left" : "text-left"}
                  >
                    <td className="py-2 px-2 text-left whitespace-nowrap ">
                      {index + 1}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.ItemCode}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.ItemName}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.Category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Out of Stock Items */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Out Of Stock Items</h2>
            <table className="w-full bg-white shadow-md rounded">
              <thead>
                <tr className="bg-blue-950 text-white text-sm leading-normal">
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    SrNo
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Code
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Product
                  </th>
                  <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {outOfStockItems.map((item, index) => (
                  <tr
                    key={item._id}
                    className={index % 2 === 0 ? "bg-gray-100 text-left" : "text-left"}
                  >
                    <td className="py-2 px-2 text-left whitespace-nowrap ">
                      {index + 1}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.ItemCode}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.ItemName}
                    </td>
                    <td className="py-2 px-2 text-left whitespace-nowrap">
                      {item.Category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Recent Sales orders */}
          {/* <div>
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
          </div> */}
          {/* Recent Purchase orders */}
          {/* <div>
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DashBoard;

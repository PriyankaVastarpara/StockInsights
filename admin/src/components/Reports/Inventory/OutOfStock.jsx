import React, { useState, useContext } from "react";
import SharedContext from "../../../contexts/SharedContext";

const OutOfStock = () => {
  const { outOfStockItems} = useContext(SharedContext);
  const [searchTerm, setSearchTerm] = useState("");
  
   // Filter items based on search term
   const filteredItems = outOfStockItems.filter(item =>
    item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-2 bg-blue-900 text-white text-center rounded font-sans font-semibold">
        Out Of Stock Items Report
      </div>
      <div className="overflow-x-auto mx-10 mt-2">
        <div className="my-2 flex justify-end  ">
       {/* Search bar */}
       <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="p-2 m-2 border border-gray-400 rounded"
      />
      </div>
        <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-600">
            <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">SrNo</th>
            <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">Code</th>
            <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">Product</th>
            <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">Category</th>
            <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">Vendor</th>
            <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">StockUnit</th>
            <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">MRP</th>
            {/* <th className="border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100">ReorderQuantity</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item ,index)=> (
            <tr key={item._id} className={`${
              index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"
            } border border-gray-400`}> 
              <td className="border border-gray-400 px-4 py-1 text-gray-800">{index+1}</td>
              <td className="border border-gray-400 px-4 py-1 text-gray-800">{item.ItemCode}</td>
              <td className="border border-gray-400 px-4 py-1 text-gray-800">{item.ItemName}</td>
              <td className="border border-gray-400 px-4 py-1 text-gray-800">{item.Category}</td>
              <td className="border border-gray-400 px-4 py-1 text-gray-800">{item.VendorName}</td>
              <td className="border border-gray-400 px-4 py-1 text-gray-800">{item.StockUnit}</td>
              <td className="border border-gray-400 px-4 py-1 text-gray-800">{item.MRP}</td>
              {/* <td className="border border-gray-400 px-4 py-1 text-gray-800">{item.ReorderPoint}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default OutOfStock;

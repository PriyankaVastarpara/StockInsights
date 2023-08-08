import React, { useState, useContext } from "react";
import SubNavbar from "../../SubNavbar/SubNavbar";
import SearchBar from "../../SearchBar/SearchBar";
import SharedContext from "../../../contexts/SharedContext";

const LowStock = () => {
    const { reports} = useContext(SharedContext);
    const [searchQuery, setSearchQuery] = useState("");
  const [filteredLowStockData, setFilteredLowStockData] = useState(
    reports.LowStockData
  );

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = reports.LowStockData.filter((item) =>
      item.product.toLowerCase().includes(query)
    );

    setFilteredLowStockData(filteredData);
  };
  return (
    <>
    <SubNavbar
        title="Low Stock Items"
        link="/lowstock"
        search={<SearchBar value={searchQuery} onChange={handleSearch} />}
      />
    <div className="overflow-x-auto mx-10 mt-3">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-600  ">
              {reports.LowStockFields.map((LowStockField, index) => (
                <th
                  key={index}
                  className={`${LowStockField.width} border border-gray-400 px-2 py-2 text-left font-semibold text-white`}                >
                  {LowStockField.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredLowStockData.map((row, rowIndex) => (
              <tr
                key={row.srno}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-gray-200"
                } border border-gray-400`}
              >
                {reports.LowStockFields.map((LowStockField, index) => (
                  <td
                    key={index}
                    className="border border-gray-400 px-4 py-1 text-gray-800"
                  >
                    {row[LowStockField.name.toLowerCase()]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default LowStock;
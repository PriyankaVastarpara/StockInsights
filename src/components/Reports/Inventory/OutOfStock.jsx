import React, { useState, useContext } from "react";
import SubNavbar from "../../SubNavbar/SubNavbar";
import SearchBar from "../../SearchBar/SearchBar";
import SharedContext from "../../../contexts/SharedContext";

const OutOfStock = () => {
    const { reports} = useContext(SharedContext);
    const [searchQuery, setSearchQuery] = useState("");
  const [filteredOutOfStockData, setFilteredOutOfStockData] = useState(
    reports.OutOfStockData
  );

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = reports.OutOfStockData.filter((item) =>
      item.product.toLowerCase().includes(query)
    );

    setFilteredOutOfStockData(filteredData);
  };
  return (
    <>
    <SubNavbar
        title="Out Of Stock Items"
        link="/outofstock"
        search={<SearchBar value={searchQuery} onChange={handleSearch} />}
      />
    <div className="overflow-x-auto mx-10 mt-3">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-600 ">
              {reports.OutOfStockFields.map((OutOfStockField, index) => (
                <th
                  key={index}
                  className={`${OutOfStockField.width} border border-gray-400 px-2 py-1 text-left font-semibold text-gray-100`}                >
                  {OutOfStockField.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredOutOfStockData.map((row, rowIndex) => (
              <tr
                key={row.srno}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-gray-200"
                } border border-gray-400`}
              >
                {reports.OutOfStockFields.map((OutOfStockField, index) => (
                  <td
                    key={index}
                    className="border border-gray-400 px-4 py-1 text-gray-800"
                  >
                    {row[OutOfStockField.name.toLowerCase()]}
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


export default OutOfStock;
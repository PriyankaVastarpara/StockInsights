import React , { useState,useContext } from "react";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import SharedContext from "../../contexts/SharedContext";

const VendorData = () => {
  const { tableData } = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVendorData, setFilteredVendorData] = useState(
    tableData.vendorTableData
  );

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = tableData.vendorTableData.filter((vendor) =>
    vendor.name.toLowerCase().includes(query)
    );

    setFilteredVendorData(filteredData);
  }
  return (
    <>
    <SubNavbar title="Vendors" link="/addvendor" search={<SearchBar value={searchQuery} onChange={handleSearch} />}/>
    <div className="overflow-x-auto mx-10 mt-3">
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-blue-900 ">
            {tableData.VendorFields.map((VendorField, index) => (
              <th
                key={index}
                className="border border-gray-400 px-4 py-2 font-semibold text-white"
              >
                {VendorField}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredVendorData.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
              } border border-gray-400`}
            >
              {tableData.VendorFields.map((VendorField, index) => (
                <td
                  key={index}
                  className="border border-gray-400 px-4 py-1 text-gray-800"
                >
                  {row[VendorField.toLowerCase()]}
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

export default VendorData;

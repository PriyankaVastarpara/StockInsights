import React, { useState, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import UpdateVendor from "../UpdateVendor/UpdateVendor";
import SharedContext from "../../contexts/SharedContext";
import DeletePopup from "../DeletePopup/DeletePopup";

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
  };
  // Handle update vendor page

  const [isUpdateVendorOpen, setIsUpdateVendorOpen] = useState(false);

  const handleOpenUpdateVendor = () => {
    setIsUpdateVendorOpen(true);
  };

  const handleCloseUpdateVendor = () => {
    setIsUpdateVendorOpen(false);
  };
  //Handle Delete
const [showPopup, setShowPopup] = useState(false);

const handleDeleteClick = () => {
  setShowPopup(true);
};

const handleCancel = () => {
  setShowPopup(false);
};

const handleDelete = () => {
  setShowPopup(false);
};
  return (
    <>
      <SubNavbar
        title="Vendors"
        link="/addvendor"
        search={<SearchBar value={searchQuery} onChange={handleSearch} />}
      />
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
              <th className="border border-gray-400 px-4 py-2 font-semibold text-white">
                Action
              </th>
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
                <td className="flex justify-center gap-2">
                  <button
                    onClick={handleOpenUpdateVendor}
                    className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded"
                  >
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  {isUpdateVendorOpen && (
                    <UpdateVendor onClose={handleCloseUpdateVendor} />
                  )}
                 <button
                    onClick={handleDeleteClick}
                    className="items-center text-red-500 hover:bg-red-200   font-bold py-1 px-1 rounded"
                  >
                    <MdDelete icon="delete-alt" size={18} />
                  </button>
                  {showPopup && (
                    <DeletePopup
                      onCancel={handleCancel}
                      onDelete={handleDelete}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VendorData;

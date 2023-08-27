import React, { useState, useEffect, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import UpdateVendor from "../UpdateVendor/UpdateVendor";
import SharedContext from "../../contexts/SharedContext";
import DeletePopup from "../DeletePopup/DeletePopup";
import { format } from "date-fns";
import axios from "axios";

const VendorData = () => {
  const { vendorData, VendorHeader } = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(vendorData);
  const [isUpdateVendorOpen, setIsUpdateVendorOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenUpdateVendor = (itemId) => {
    setIsUpdateVendorOpen(true);
    setSelectedId(itemId)
  };

  const handleCloseUpdateVendor = () => {
    setIsUpdateVendorOpen(false);
  };

  //display and create vendor data
  const fetchData = () => {
    if (searchQuery) {
      const filteredData = vendorData.filter((item) =>
        item.VendorName?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(vendorData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery, vendorData]);
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  //Handle Delete
  // const handleDeleteClick = () => {
  //   setShowPopup(true);
  // };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleDelete = () => {
    setShowPopup(false);
  };
  const handleDeleteClick = async (vendorId) => {
    if (window.confirm("Are you sure you want to delete this Vendor?")) {
      try {
        await axios.delete(`http://localhost:3000/vendor/${vendorId}`);
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error("Error deleting vendor:", error);
      }
    }
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
              {VendorHeader?.map((VendorField, index) => (
                <th
                  key={index}
                  className={`${VendorField.width} border border-gray-400 px-4 py-2 text-left font-semibold text-white`}
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
            {filteredTableBody.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
                } border border-gray-400`}
              >
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                  {rowIndex + 1}
                </td>
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                  {row.Code}
                </td>
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                  {row.VendorName}
                </td>
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                  {row.CompanyName}
                </td>
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                  {row.Email}
                </td>
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                  {row.City}
                </td>
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                  {row.Phone}
                </td>
                <td className="border border-gray-400 px-4 py-1 text-gray-800">
                {format(new Date(row.CreatedOnDate), "dd-MM-yyyy")}
                </td>
                <td className="flex justify-center gap-2">
                  <button
                    onClick={()=>{
                      handleOpenUpdateVendor(row._id)                      
                    }}
                    className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded"
                  >
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  {isUpdateVendorOpen && (
                    <UpdateVendor
                      vendorId={selectedId}
                      onClose={handleCloseUpdateVendor}
                    />
                  )}
                  <button
                    onClick={() => handleDeleteClick(row._id)}
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

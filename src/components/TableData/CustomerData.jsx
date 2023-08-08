import React, { useState, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SharedContext from "../../contexts/SharedContext";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
import DeletePopup from "../DeletePopup/DeletePopup";

const CustomerData = () => {
  const { tableData } = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomerData, setFilteredCustomerData] = useState(
    tableData.customerTableData
  );

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = tableData.customerTableData.filter((customer) =>
      customer.name.toLowerCase().includes(query)
    );

    setFilteredCustomerData(filteredData);
  };

  // Handle update customer page

  const [isUpdateCustomerOpen, setIsUpdateCustomerOpen] = useState(false);

  const handleOpenUpdateCustomer = () => {
    setIsUpdateCustomerOpen(true);
  };

  const handleCloseUpdateCustomer = () => {
    setIsUpdateCustomerOpen(false);
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
      <SubNavbar title="Customers" link="/addcustomer" search={<SearchBar value={searchQuery} onChange={handleSearch} />}
      />
      <div className="overflow-x-auto mx-10 mt-3">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-900">
              {tableData.CustomerFields.map((CustomerField, index) => (
                <th
                  key={index}
                  className="border border-gray-400 px-4 py-2 font-semibold text-white"
                >
                  {CustomerField}
                </th>
              ))}
               <th className="border border-gray-400 px-4 py-2 font-semibold text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomerData.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
                } border border-gray-400`}
              >
                {tableData.CustomerFields.map((CustomerField, index) => (
                  <td
                    key={index}
                    className="border border-gray-400 px-4 py-1 text-gray-800"
                  >
                    {row[CustomerField.toLowerCase()]}
                  </td>
                ))}
                  <td className="flex justify-center gap-2">
                  <button onClick={handleOpenUpdateCustomer} className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  {isUpdateCustomerOpen && <UpdateCustomer onClose={handleCloseUpdateCustomer} />}
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

export default CustomerData;

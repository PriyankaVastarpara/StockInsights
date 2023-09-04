import React, { useState,useEffect, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SharedContext from "../../contexts/SharedContext";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
import { format } from "date-fns";
import axios from "axios";

const CustomerData = () => {
  const { customerData , CustomerHeader} = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(customerData);
  const [isUpdateCustomerOpen, setIsUpdateCustomerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  //display and create customer
  const fetchData = () => {
    if (searchQuery) {
      const filteredData = customerData.filter((item) =>
        item.CustomerName?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(customerData);
    }
  }
  useEffect(() => {
    fetchData();
  }, [searchQuery, customerData,]);
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
  
  const handleDeleteClick = async (customerId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await axios.delete(`http://localhost:3000/customer/${customerId}`); 
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error('Error deleting customer:', error);
      }
    }
  };
//for update
  const handleOpenUpdateCustomer  = (itemId) => {
    setIsUpdateCustomerOpen(true);
    setSelectedId(itemId)
  };

  const handleCloseUpdateCustomer = () => {
    setIsUpdateCustomerOpen(false);
  };
  
  return (
    <>
      <SubNavbar title="Customers" link="/addcustomer"  search={<SearchBar value={searchQuery} onChange={handleSearch} />}/>
      <div className="overflow-x-auto mx-10 mt-3">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-900">
              {CustomerHeader?.map((CustomerField, index) => (
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
            {filteredTableBody.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
                } border border-gray-400`}
              >
                <td className="border border-gray-400 px-4 py-1 text-gray-800">{rowIndex+1}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.CustomerName}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.Code}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.Email}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.City}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.Phone}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{format(new Date(row.CreatedOnDate), "dd-MM-yyyy")}</td>
                  <td className="flex justify-center gap-2">
                  <button 
                  onClick={()=>{
                    handleOpenUpdateCustomer(row._id)                      
                  }} className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  {isUpdateCustomerOpen && <UpdateCustomer  customerId={selectedId} onClose={handleCloseUpdateCustomer} />}
                  <button
                    onClick={() => handleDeleteClick(row._id)}
                    className="items-center text-red-500 hover:bg-red-200   font-bold py-1 px-1 rounded"
                  >
                    <MdDelete icon="delete-alt" size={18} />
                  </button>
                  {/* {showPopup && (
                    <DeletePopup
                      onCancel={handleCancel}
                      onDelete={handleDelete}
                    />
                  )} */}
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

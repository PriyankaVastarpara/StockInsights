import React,{useState, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";
import SubNavbar from "../SubNavbar/SubNavbar";
import UpdateSalesOrder from "../UpdateSalesOrder/UpdateSalesOrder";
import SharedContext from "../../contexts/SharedContext";
import DeletePopup from "../DeletePopup/DeletePopup";
import { Link } from "react-router-dom";

const SalesOrderData = () => {
  const { tableData } = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSalesOrderData, setFilteredSalesOrderData] = useState(
    tableData.salesOrderTableData
  );
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = tableData.salesOrderTableData.filter((salesorder) =>
    salesorder.customer.toLowerCase().includes(query)
    );

    setFilteredSalesOrderData(filteredData);
  };
   // Handle update purchase order page

   const [isUpdateSalesOrderOpen, setIsUpdateSalesOrderOpen] = useState(false);

   const handleOpenUpdateSalesOrder = () => {
    setIsUpdateSalesOrderOpen(true);
   };
 
   const handleCloseUpdateSalesOrder = () => {
    setIsUpdateSalesOrderOpen(false);
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
  
  const handleDeleteClick = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this OrderData?")) {
      try {
        await axios.delete(`http://localhost:3000/customer/${orderId}`); 
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error('Error deleting Order:', error);
      }
    }
  };
  return (
    <>
    <SubNavbar title="Sales Orders" link="/sales-invoices"  search={<SearchBar value={searchQuery} onChange={handleSearch} />}/>
    <div className="overflow-x-auto mx-10 mt-3">
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-blue-900 ">
            {tableData.SalesOrderFields.map((SalesOrderField, index) => (
              <th
                key={index}
                className="border border-gray-400 px-4 py-2 font-semibold text-white"
              >
                {SalesOrderField}
              </th>
            ))}
             <th className="border border-gray-400 px-4 py-2 font-semibold text-white">
                Action
              </th>
          </tr>
        </thead>
        <tbody>
          {filteredSalesOrderData.map((row, rowIndex) => (
            <tr
              key={row.srno}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
              } border border-gray-400`}
            >
              {tableData.SalesOrderFields.map((SalesOrderField, index) => (
                <td
                  key={index}
                  className="border border-gray-400 px-4 py-1 text-gray-800"
                >
                  {row[SalesOrderField.toLowerCase()]}
                </td>
              ))}
                <td className="flex justify-center gap-2">
                  <Link to="/update-sales-invoices">
                <button onClick={handleOpenUpdateSalesOrder} className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  </Link>
                  {isUpdateSalesOrderOpen && <UpdateSalesOrder onClose={handleCloseUpdateSalesOrder} />}
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

export default SalesOrderData;

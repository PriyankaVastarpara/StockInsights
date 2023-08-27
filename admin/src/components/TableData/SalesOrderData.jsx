import React,{useState,useEffect, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";
import SubNavbar from "../SubNavbar/SubNavbar";
// import UpdateSalesOrder from "../UpdateSalesOrder/UpdateSalesOrder";
import SharedContext from "../../contexts/SharedContext";
import DeletePopup from "../DeletePopup/DeletePopup";
import { format } from "date-fns";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";

const SalesOrderData = () => {
  const {invoiceData,SalesOrderHeader} = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(invoiceData);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  
   //display and create bill
   const fetchData = () => {
    if (searchQuery) {
      const filteredData = invoiceData.filter((item) =>
        item.CustomerName?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(invoiceData);
    }
  }
  useEffect(() => {
    fetchData();
  }, [searchQuery, invoiceData,]);
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };
  //for update
  const handleOpenUpdateInvoice  = (itemId) => {
    setIsUpdateSalesOrderOpen(true);
    setSelectedId(itemId)
  };

  const handleCloseUpdateInvoice  = () => {
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
        await axios.delete(`http://localhost:3000/invoice/${orderId}`); 
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
            {SalesOrderHeader.map((SalesOrderField, index) => (
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
        {filteredTableBody.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
                } border border-gray-400`}
              >
                <td className="border border-gray-400 px-4 py-1 text-gray-800">{rowIndex+1}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.CustomerName}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.orderNo}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.billNo}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{format(new Date(row.invoiceDate), "dd-MM-yyyy")}</td>
                                    <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.subTotal}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.discount}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.total}</td>
                <td className="flex justify-center gap-2">
                <Link to="/update-sales-invoices">
                <button  onClick={()=>{
                    handleOpenUpdateSalesInvoice(row._id)                      
                  }} className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  </Link>
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

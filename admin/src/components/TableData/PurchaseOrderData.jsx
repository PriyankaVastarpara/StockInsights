import React,{useState,useEffect,useContext } from "react";
import { MdDelete,MdRemoveRedEye} from "react-icons/md";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import SharedContext from "../../contexts/SharedContext";
import DeletePopup from "../DeletePopup/DeletePopup";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";

const PurchaseOrderData = () => {
  const {purchaseBillData,PurchaseOrderHeader} = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(purchaseBillData);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

   //display and create bill
   const fetchData = () => {
    if (searchQuery) {
      const filteredData = purchaseBillData.filter((item) =>
        item.VendorName?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(purchaseBillData);
    }
  }
  useEffect(() => {
    fetchData();
  }, [searchQuery, purchaseBillData,]);
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
  
  const handleDeleteClick = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this OrderData?")) {
      try {
        await axios.delete(`http://localhost:3000/purchasebill/${orderId}`); 
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error('Error deleting Order:', error);
      }
    }
  };
  return (
    <>
    <SubNavbar title="Purchase Orders" link="/purchase-bills"  search={<SearchBar value={searchQuery} onChange={handleSearch} />}/>
    <div className="overflow-x-auto mx-10 mt-3">
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-blue-900 ">
            {PurchaseOrderHeader.map((PurchaseOrderField, index) => (
              <th
                key={index}
                className="border border-gray-400 px-4 py-2 font-semibold text-white"
              >
                {PurchaseOrderField}
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
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.VendorName}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.orderNo}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.billNo}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{format(new Date(row.invoiceDate), "dd-MM-yyyy")}</td>
                                    <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.subTotal}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.discount}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.total}</td>
                <td className="flex justify-center gap-2">
               
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
                   <Link to={`/view-purchaseOrder/${row._id}`}>
                   <button  className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                      <MdRemoveRedEye icon="view-alt" size={18}/>
                    </button>
                    </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default PurchaseOrderData;

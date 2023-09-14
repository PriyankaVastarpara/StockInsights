import React, { useState,useEffect,useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete,MdRemoveRedEye } from "react-icons/md";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import UpdateItem from "../UpdateItem/UpdateItem";
import SharedContext from "../../contexts/SharedContext";
import DeletePopup from "../DeletePopup/DeletePopup";
import { format } from "date-fns";
import axios from "axios";
import { Link } from "react-router-dom";


const ItemData = () => {
  const {itemData,ItemHeader} = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(itemData);
  const [showPopup, setShowPopup] = useState(false);
  const [isUpdateItemOpen, setIsUpdateItemOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchData = () => {
    if (searchQuery) {
      const filteredData = itemData.filter((item) =>
        item.ItemName?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(itemData);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchQuery, itemData,]);
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
  
  const handleDeleteClick = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`http://localhost:3000/item/${itemId}`); 
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };
 

  const handleOpenUpdateItem = (itemId) => {
    setIsUpdateItemOpen(true);
    setSelectedId(itemId)
  };

  const handleCloseUpdateItem = () => {
    setIsUpdateItemOpen(false);
  };

  
  return (
    <>
      <SubNavbar
        title="Products"
        link="/additem"
        search={<SearchBar value={searchQuery} onChange={handleSearch} />}
      />
      <div className="overflow-x-auto mx-10 mt-3">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-900 ">
              {ItemHeader.map((ItemFields, index) => (
                <th
                  key={index}
                  className={`${ItemFields.width} border border-gray-400 px-4 py-2 text-left font-semibold text-white`}>
                  {ItemFields.name}
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
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.ItemName}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.ItemCode}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.Category}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.Quantity}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.StockUnit}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.UnitPrice}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.TotalAmount}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.ReorderPoint}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{format(new Date(row.ExpiryDate), "dd-MM-yyyy")}</td>
              
                <td className="flex justify-center gap-2">
                  <button
                     onClick={()=>{
                      handleOpenUpdateItem(row._id)                      
                    }}
                    className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded"
                  >
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  {isUpdateItemOpen && (
                    <UpdateItem itemId={selectedId} onClose={handleCloseUpdateItem} />
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
                  <Link to={`/view-item/${row._id}`}>
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

export default ItemData;

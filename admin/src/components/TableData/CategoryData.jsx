import React, { useState,useEffect, useContext } from "react";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import UpdateCategory from "../UpdateCategory/UpdateCategory";
import DeletePopup from "../DeletePopup/DeletePopup";
import SharedContext from "../../contexts/SharedContext";
import { format } from "date-fns";
import axios from "axios";

const CategoryData = () => {
  const { categoryData , CategoryHeader} = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(categoryData);
  const [isUpdateCategoryOpen, setIsUpdateCategoryOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenUpdateCategory = (categoryId) => {
    setIsUpdateCategoryOpen(true);
    setSelectedId(categoryId);
  };

  const handleCloseUpdateCategory = () => {
    setIsUpdateCategoryOpen(false);
  };
  //Handle Delete
  const [showPopup, setShowPopup] = useState(false);

  // const handleDeleteClick = () => {
  //   setShowPopup(true);
  // };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleDelete = () => {
    setShowPopup(false);
  };

   const fetchData = () => {
    if (searchQuery) {
      const filteredData = categoryData.filter((item) =>
        item.CategoryName?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(categoryData);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchQuery, categoryData,]);
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleDeleteClick = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://localhost:3000/category/${categoryId}`); 
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };
  return (
    <>
      <SubNavbar
        title="Categories"
        link="/addcategory"
        search={<SearchBar value={searchQuery} onChange={handleSearch} />}
      />
      <div className="overflow-x-auto mx-10 mt-3">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-900 ">
              {CategoryHeader.map((CategoryField, index) => (
                <th
                  key={index}
                  className={`${CategoryField.width} w-min border border-gray-400 px-4 py-2 text-left font-semibold text-white`}
                >
                  {CategoryField.name}
                </th>
              ))}
              <th className="border w-36 border-gray-400 px-4 py-2 font-semibold text-white">
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
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.CategoryName}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.Code}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{row.Description}</td>
                  <td className="border border-gray-400 px-4 py-1 text-gray-800">{format(new Date(row.CreatedOnDate), "dd-MM-yyyy")}</td>
                  <td className="flex justify-center gap-2">
                  <button onClick={()=>{
                    handleOpenUpdateCategory(row._id)                      
                  }} className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  {isUpdateCategoryOpen && <UpdateCategory categoryId={selectedId} onClose={handleCloseUpdateCategory} />}
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

export default CategoryData;

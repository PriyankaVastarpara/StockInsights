import React, { useState, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import UpdateItem from "../UpdateItem/UpdateItem";
import SharedContext from "../../contexts/SharedContext";
import DeletePopup from "../DeletePopup/DeletePopup";

const ItemData = () => {
  const { tableData } = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItemData, setFilteredItemData] = useState(
    tableData.itemTableData
  );

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = tableData.itemTableData.filter((item) =>
      item.product.toLowerCase().includes(query)
    );

    setFilteredItemData(filteredData);
  };
  // Handle update item page

  const [isUpdateItemOpen, setIsUpdateItemOpen] = useState(false);

  const handleOpenUpdateItem = () => {
    setIsUpdateItemOpen(true);
  };

  const handleCloseUpdateItem = () => {
    setIsUpdateItemOpen(false);
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
        title="Products"
        link="/additem"
        search={<SearchBar value={searchQuery} onChange={handleSearch} />}
      />
      <div className="overflow-x-auto mx-10 mt-3">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-900 ">
              {tableData.ItemFields.map((ItemFields, index) => (
                <th
                  key={index}
                  className={`${ItemFields.width} border border-gray-400 px-4 py-2 text-left font-semibold text-white`}                >
                  {ItemFields.name}
                </th>
              ))}
              <th className="border border-gray-400 px-4 py-2 font-semibold text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredItemData.map((row, rowIndex) => (
              <tr
                key={row.srno}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
                } border border-gray-400`}
              >
                {tableData.ItemFields.map((ItemField, index) => (
                  <td
                    key={index}
                    className="border border-gray-400 px-4 py-1 text-gray-800"
                  >
                    {row[ItemField.name.toLowerCase()]}
                  </td>
                ))}
                <td className="flex justify-center gap-2">
                  <button
                    onClick={handleOpenUpdateItem}
                    className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded"
                  >
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  {isUpdateItemOpen && (
                    <UpdateItem onClose={handleCloseUpdateItem} />
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

export default ItemData;

import React,{useState,useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SubNavbar from "../SubNavbar/SubNavbar";
import SearchBar from "../SearchBar/SearchBar";
import SharedContext from "../../contexts/SharedContext";

const PurchaseOrderData = () => {
  const { tableData } = useContext(SharedContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPurchaseOrderData, setFilteredPurchaseOrderData] = useState(
    tableData.purchaseOrderTableData
  );

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = tableData.purchaseOrderTableData.filter((purchaseorder) =>
    purchaseorder.vendor.toLowerCase().includes(query)
    );

    setFilteredPurchaseOrderData(filteredData);
  };

  return (
    <>
    <SubNavbar title="Purchase Orders" link="/newpurchase"  search={<SearchBar value={searchQuery} onChange={handleSearch} />}/>
    <div className="overflow-x-auto mx-10 mt-3">
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-blue-900 ">
            {tableData.PurchaseOrderFields.map((PurchaseOrderField, index) => (
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
          {filteredPurchaseOrderData.map((row, rowIndex) => (
            <tr
              key={row.srno}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
              } border border-gray-400`}
            >
              {tableData.PurchaseOrderFields.map((PurchaseOrderField, index) => (
                <td
                  key={index}
                  className="border border-gray-400 px-4 py-1 text-gray-800"
                >
                  {row[PurchaseOrderField.toLowerCase()]}
                </td>
              ))}
                <td className="flex justify-center gap-2">
                  <button className="items-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                    <BiSolidPencil icon="pencil-alt" size={18} />
                  </button>
                  <button className="items-center text-red-500 hover:bg-red-200   font-bold py-1 px-1 rounded">
                    <MdDelete icon="delete-alt" size={18} />
                  </button>
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

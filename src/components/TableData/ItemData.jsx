import React from "react";
import { useContext } from "react";
import SharedContext from "../../contexts/SharedContext";

const ItemData = () => {
  const { tableData } = useContext(SharedContext);

  return (
    <div className="overflow-x-auto mx-10 mt-3">
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-blue-900 ">
            {tableData.ItemFields.map((ItemFields, index) => (
              <th
                key={index}
                className="border border-gray-400 px-4 py-2 font-semibold text-white"
              >
                {ItemFields}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.itemTableData.map((row, rowIndex) => (
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
                  {row[ItemField.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemData;

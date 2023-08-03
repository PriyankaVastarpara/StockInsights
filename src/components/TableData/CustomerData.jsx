import React from "react";
import { useContext } from "react";
import SharedContext from "../../contexts/SharedContext";
import SubNavbar from "../SubNavbar/SubNavbar";

const CustomerData = () => {
  const { tableData } = useContext(SharedContext);

  return (
    <>
    <SubNavbar title="Customers"/>
    <div className="overflow-x-auto mx-10 mt-3">
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-blue-900 ">
            {tableData.CustomerFields.map((CustomerField, index) => (
              <th
                key={index}
                className="border border-gray-400 px-4 py-2 font-semibold text-white"
              >
                {CustomerField}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.customerTableData.map((row, rowIndex) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default CustomerData;

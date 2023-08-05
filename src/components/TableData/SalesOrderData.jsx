import React from "react";
import { useContext } from "react";
import SubNavbar from "../SubNavbar/SubNavbar";
import SharedContext from "../../contexts/SharedContext";

const SalesOrderData = () => {
  const { tableData } = useContext(SharedContext);

  return (
    <>
    <SubNavbar title="Sales Orders" link="/newsale"/>
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
          </tr>
        </thead>
        <tbody>
          {tableData.salesOrderTableData.map((row, rowIndex) => (
            <tr
              key={row.id}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default SalesOrderData;

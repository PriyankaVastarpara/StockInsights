import React, { useState, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiRupee, BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SharedContext from "../../contexts/SharedContext";

const UpdateSalesOrder = ({ onClose }) => {
  const { formData, setNewSalesOrderData, tableData } =
    useContext(SharedContext);
  const [formValues, setFormValues] = useState({});
  const [rows, setRows] = useState([{}]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSalesOrderData(formValues);
    console.log(formValues);
  };
  const addRow = () => {
    setRows([...rows, {}]);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30">
      <div className="relative w-11/12 bg-white rounded-lg p-2 h-5/6 overflow-y-scroll ">
        <button
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <RxCross2 size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Sales Order</h2>
        <div className="w-full h-full">
          <div className="grid grid-cols-3 gap-6 border bg-white rounded-md p-3 pl-9 my-2 text-sm shadow-md  ">
            <form
              className="flex flex-col col-span-2 gap-y-4"
              onSubmit={handleSubmit}
            >
              <div className="text-sm">
                {formData.newsalesorder.fields.map((field) => (
                  <div key={field.name} className="mb-4 flex">
                    <label
                      htmlFor={field.name}
                      className=" text-gray-700 font-semibold w-1/4 mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        value={formValues[field.name] || ""}
                        onChange={handleChange}
                        className="w-full border rounded-md py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500 resize-none"
                      />
                    ) : field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        value={formValues[field.name] || ""}
                        onChange={handleChange}
                        className="w-full h-8 border rounded-md py-1 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        value={formValues[field.name] || ""}
                        onChange={handleChange}
                        className="w-full h-8 border rounded-md py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </form>
          </div>
          <div className="overflow-x-auto  mt-3 mb-8">
            {/* Table for products */}
            <table className="w-full table-auto border-collapse border bg-gray-100 border-gray-400">
              <thead>
                <tr className="bg-blue-900 ">
                  {tableData.NewPurchaseOrderFields.map(
                    (NewPurchaseOrderField, index) => (
                      <th
                        key={index}
                        className="border border-gray-400 px-4 py-2 font-semibold text-white"
                      >
                        {NewPurchaseOrderField}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-right ">
                {rows.map((item, index) => (
                  <tr key={index} className="bg-transparent hover:bg-gray-50">
                    <td className="text-center">{index + 1}</td>
                    <td className="flex justify-center gap-2">
                      <button className="text-center text-blue-500 hover:bg-blue-200  font-bold py-1 px-1 rounded">
                        <BiSolidPencil icon="pencil-alt" size={18} />
                      </button>
                      <button className="text-center text-red-500 hover:bg-red-200   font-bold py-1 px-1 rounded">
                        <MdDelete icon="delete-alt" size={18} />
                      </button>
                    </td>

                    <td className="text-left">
                      <input
                        type="text"
                        name="product"
                        id="product"
                        autoComplete="given-name"
                        className="border border-gray-300 ms-auto w-full"
                      />
                    </td>
                    <td className="">
                      <input
                        type="number"
                        name="qty"
                        id="qty"
                        autoComplete="given-name"
                        className="border border-gray-300 ms-auto w-full"
                      />
                    </td>
                    <td className="">
                      <input
                        type="number"
                        name="reorder"
                        id="reorder"
                        autoComplete="given-name"
                        className="border border-gray-300 ms-auto w-full"
                      />
                    </td>
                    <td className="">
                      <input
                        type="number"
                        name="rate"
                        id="rate"
                        autoComplete="given-name"
                        className="border border-gray-300 ms-auto w-full"
                      />
                    </td>
                    <td className="">
                      <input
                        type="number"
                        name="discount"
                        id="discount"
                        autoComplete="given-name"
                        className="border border-gray-300 ms-auto w-full"
                      />
                    </td>
                    <td className="">
                      <input
                        type="number"
                        name="total"
                        id="item_total"
                        autoComplete="given-name"
                        className="border border-gray-300 ms-auto w-full"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="bg-blue-900 mt-1 text-sm rounded-md text-white px-3 py-1"
              onClick={addRow}
            >
              + Add Item
            </button>
          </div>
          <div>
            <form action="" className="w-full ">
              <div className="text-sm text-gray-700 font-semibold w-1/2 ">
                <div className="mb-4 flex items-center gap-5">
                  <label htmlFor="remarks" className="w-1/3 p-2">
                    Remarks
                  </label>
                  <textarea
                    name="remarks"
                    id="remarks"
                    cols="40"
                    rows="3"
                    className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>

                <div className="mb-4 flex items-center gap-5">
                  <label htmlFor="notes" className="w-1/3 p-2">
                    Terms & Conditions
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    cols="40"
                    rows="3"
                    className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div></div>
            </form>
            <div className=" h-40 grid grid-cols gap-3 place-content-end">
              <div className="grid grid-cols-2 gap-4  w-fit ">
                <div className="w-40 font-sans font-semibold">Sub Total</div>
                <span className="flex items-center">
                  <BiRupee size={18} />
                  0.00
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 w-fit">
                <div className="w-40 font-sans font-semibold">
                  Total Discount
                </div>
                <span className="flex items-center">
                  <BiRupee size={18} />
                  0.00
                </span>
              </div>
              <hr className="h-px bg-slate-100 m-2 w-2/3 border-0" />
              <div className="grid grid-cols-2 gap-4 w-fit">
                <div className="w-40 font-sans font-bold">Total Amount</div>
                <span className="flex items-center">
                  <BiRupee size={18} />
                  <span className="text-center font-bold">0.00</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-start py-3">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSalesOrder;

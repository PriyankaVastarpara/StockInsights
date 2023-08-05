import React, { useState } from "react";
import { useContext } from "react";
import { BiRupee } from "react-icons/bi";
import { MdOutlineDelete, MdEdit } from "react-icons/md";
import SubNavbar from "../SubNavbar/SubNavbar";
import SharedContext from "../../contexts/SharedContext";
const PurchaseInvoice = () => {
  const { tableData } = useContext(SharedContext);
  const [rows, setRows] = useState([{}]);
  const [formData, setFormData] = useState({
    vendor: "",
    invoiceno: "",
    purchaseorderno: "",
    invoicedate: "",
    method: "",
    address: "",
    duedate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here
    console.log("Form submitted:", formData);
  };
  const handleCancel = () => {
    setFormValues({});
  };
  
  const addRow = () => {
    setRows([...rows, {}]);
  };
  return (
    <>
    <SubNavbar title="Purchase Bills"/>
      <div className="w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="w-full  mt-3 px-8 py-4 bg-gray-100 shadow-md rounded-md"
        >
          <h2 className="text-xl font-sans font-semibold mb-4 bg-slate-100">
            New Purchase Bill
          </h2>
          <div className="flex gap-12">
            <div className="text-sm text-gray-700 font-semibold w-1/2 ">
              <div className="mb-4 flex ">
                <label htmlFor="customer" className="w-1/3 p-2">
                  Vendor
                </label>
                <input
                  type="text"
                  id="vendor"
                  name="vendor"
                  value={formData.vendor}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="mb-4 flex">
                <label htmlFor="invoiceno" className="w-1/3 p-2">
                  Invoice No
                </label>
                <input
                  type="text"
                  id="invoiceno"
                  name="invoiceno"
                  value={formData.invoiceno}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="mb-4 flex">
                <label htmlFor="purchaseorderno" className="w-1/3 p-2">
                  Purchase Order No
                </label>
                <input
                  type="text"
                  id="purchaseorderno"
                  name="purchaseorderno"
                  value={formData.purchaseorderno}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="mb-4 flex">
                <label htmlFor="invoicedate" className="w-1/3 p-2">
                  Invoice Date
                </label>
                <input
                  type="date"
                  id="invoicedate"
                  name="invoicedate"
                  value={formData.invoicedate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="text-sm text-gray-700 font-semibold w-1/2 ">
              <div className="mb-4 flex">
                <label htmlFor="method" className="w-1/3 p-2">
                  Payment Method
                </label>
                <select
                  id="method"
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  placeholder="Enter your username"
                >
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </div>
              <div className="mb-4 flex">
                <label htmlFor="address" className="w-1/3 p-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 resize-none"
                  placeholder="Enter Address"
                  rows="4"
                />
              </div>
              <div className="mb-4 flex">
                <label htmlFor="duedate" className="w-1/3 p-2">
                  Due Date
                </label>
                <input
                  type="date"
                  id="duedate"
                  name="duedate"
                  value={formData.duedate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>
        </form>
       <div className="overflow-x-auto  mt-3 mb-8">
        {/* Table for products */}
        <table className="w-full table-auto border-collapse border bg-gray-100 border-gray-400">
          <thead>
            <tr className="bg-blue-900 ">
              {tableData.PurchaseInvoiceFields.map((PurchaseInvoiceField, index) => (
                <th
                  key={index}
                  className="border border-gray-400 px-4 py-2 font-semibold text-white"
                >
                  {PurchaseInvoiceField}
                </th>
              ))}
            </tr>
          </thead>
          {/* <tbody>
            {tableData.purchaseInvoiceTableData.map((row, rowIndex) => (
              <tr
                key={row.srno}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-blue-100"
                } border border-gray-400 `}
              >
                {tableData.PurchaseInvoiceFields.map(
                  (PurchaseInvoiceField, index) => (
                    <td
                      key={index}
                      className="border border-gray-400 px-4 py-1 text-gray-800"
                    >
                      {row[PurchaseInvoiceField.toLowerCase()]}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody> */}
          <tbody className="text-right ">
            {rows.map((item, index) => (
              <tr key={index} className="bg-transparent hover:bg-gray-50">
                <td className="text-center">{index + 1}</td>
                <td className="text-red-400 text-sm  flex justify-center gap-3">
                  <MdOutlineDelete />
                  <span className="text-blue-400 text-sm text-center">
                    <MdEdit />
                  </span>
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
                <td className="text-left">
                  <input
                    type="text"
                    name="description"
                    id="description"
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
              <label htmlFor="notes" className="w-1/3 p-2">
                Customer Notes
              </label>
              <textarea
                name="notes"
                id="notes"
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
            <div className="w-40 font-sans font-semibold">Total Discount</div>
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
      </div>
     
    
      <div>
          <button
            type="submit"
            className="bg-blue-500 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none border focus:border-blue-300"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel} // Call the cancel function on button click
            className="bg-gray-300 mx-2 font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-gray-300 mx-2 font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
          >
            Print
          </button>
        </div>
    </>
  );
};

export default PurchaseInvoice;

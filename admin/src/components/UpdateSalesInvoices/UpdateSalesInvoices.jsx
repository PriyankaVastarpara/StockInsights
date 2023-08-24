import React, { useState, useContext } from "react";
import { BiRupee } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";

const UpdateSalesInvoice = () => {
  const { tableData } = useContext(SharedContext);
  const [rows, setRows] = useState([{}]);

  const [formData, setFormData] = useState({
    customer: "",
    invoiceno: "",
    salesorderno: "",
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
  const handleClear = () => {
    setFormData({
      customer: "",
      invoiceno: "",
      salesorderno: "",
      invoicedate: "",
      method: "",
      address: "",
      duedate: "",
    });
  };

  const addRow = () => {
    setRows([...rows, {}]);
  };
  return (
    <>
      <h1 className="text-xl font-sans font-semibold bg-blue-950 text-white px-3 py-1">
        {" "}
        Update Sales Invoice
      </h1>
      <div className="w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="w-full  mt-3 px-2 py-4 bg-gray-100 shadow-md rounded-md"
        >
          <div className="flex gap-12 ">
            <div className="text-sm text-gray-700 font-semibold w-1/2 flex flex-col gap-y-3 ">
              <div className="flex flex-row items-center">
                <label
                  htmlFor="customer"
                  className="justify-center text-gray-700 font-medium w-5/12"
                >
                  Customer
                </label>
                <input
                  type="text"
                  id="customer"
                  name="customer"
                  value={formData.customer}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="invoiceno"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Invoice No.
                </label>
                <input
                  type="text"
                  id="invoiceno"
                  name="invoiceno"
                  value={formData.invoiceno}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="salesorderno"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Sales Order No
                </label>
                <input
                  type="text"
                  id="salesorderno"
                  name="salesorderno"
                  value={formData.salesorderno}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="invoicedate"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Invoice Date
                </label>
                <input
                  type="date"
                  id="invoicedate"
                  name="invoicedate"
                  value={formData.invoicedate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="text-sm text-gray-700 font-semibold w-1/2 flex flex-col gap-y-3">
              <div className="flex flex-row items-center ">
                <label
                  htmlFor="method"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Payment Method
                </label>
                <select
                  id="method"
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  placeholder="Enter your username"
                >
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="address"
                  className="text-gray-700 font-medium w-5/12 "
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500  resize-none"
                  placeholder="Enter Address"
                  rows="3"
                />
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="duedate"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="duedate"
                  name="duedate"
                  value={formData.duedate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
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
                {tableData.SalesInvoiceFields.map(
                  (SalesInvoiceField, index) => (
                    <th
                      key={index}
                      className="border border-gray-400 px-4 py-2 font-semibold text-white"
                    >
                      {SalesInvoiceField}
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
                <label htmlFor="remarks" className="w-1/3 p-2">
                  Remarks
                </label>
                <textarea
                  name="remarks"
                  id="remarks"
                  cols="40"
                  rows="3"
                  className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>

              <div className="mb-4 flex items-center gap-5">
                <label htmlFor="terms" className="w-1/3 p-2">
                  Terms & Conditions
                </label>
                <textarea
                  name="terms"
                  id="terms"
                  cols="40"
                  rows="3"
                  className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>
          </form>
          <div className=" h-fit grid grid-cols gap-3 place-content-end">
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

      <div className="mx-2 flex flex-row gap-x-3 justify-start my-2">
        <button
          type="submit"
          className="bg-blue-500  text-white text-md py-2 px-4 rounded-md hover:bg-blue-600  border focus:border-blue-300"
          onClick={handleSubmit}
        >
          Update
        </button>
        <Link to="/sales-orders">
        <button
          type="button"
          className="bg-red-500  text-white font-normal text-md py-2 px-3 rounded-lg hover:bg-red-600 focus:outline-none border focus:border-gray-300"
        >
          Cancel
        </button>
        </Link>
        <button
          type="button"
          onClick={handleClear} // Call the clear function on button click
          className="bg-gray-300  font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
        >
          Clear
        </button>
        <Link to="/print-invoice">
          <button
            type="button"
            className="bg-gray-300 mx-2 font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
          >
            Print
          </button>
        </Link>
      </div>
    </>
  );
};

export default UpdateSalesInvoice;

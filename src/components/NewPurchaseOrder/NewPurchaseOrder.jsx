import React, { useState } from "react";
import { useContext } from "react";
import { BiRupee } from "react-icons/bi";
import SharedContext from "../../contexts/SharedContext";
const NewPurchaseOrder = () => {
  const { tableData } = useContext(SharedContext);
  const [formData, setFormData] = useState({
    vendor: "",
    deliver: "",
    purchaseorderno: "",
    invoicedate:"",
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
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full  p-8 bg-white shadow-md rounded-md"
        >
          <h2 className="text-xl font-sans font-semibold mb-4 bg-slate-100">
            New Purchase Order
          </h2>

          <div className="text-sm text-gray-700 font-semibold w-1/2 ">
            <div className="mb-4 flex ">
              <label htmlFor="vendor" className="w-1/3 p-2">
                Vendor Name
              </label>
              <select
                id="vendor"
                name="vendor"
                value={formData.vendor}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              >
                <option value="Vendor1">Vendor1</option>
                <option value="Vendor2">Vendor2</option>
              </select>
            </div>
            <div className="mb-4 flex">
              <label htmlFor="deliver" className="w-1/3 p-2">
                Deliver to
              </label>
              <textarea
                name="deliver"
                id="deliver"
                cols="3"
                rows="3"
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
                Order Date
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
        </form>
      </div>
      {/* Table for products */}
      <div className="overflow-x-auto mx-10 mt-3 mb-8">
        <table className="w-full table-auto border-collapse border border-gray-400">
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
          <tbody>
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
          </tbody>
        </table>
      </div>
      <div className="flex">
        <form action="" className="w-1/2 ">
          <div className="text-sm text-gray-700 font-semibold w-1/2 ">
            <div className="mb-4 mx-8">
              <label htmlFor="notes" className="w-1/3 p-2">
                Vendor Notes
              </label>
              <textarea
                name="notes"
                id="notes"
                cols="3"
                rows="3"
                className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4 mx-8">
              <label htmlFor="notes" className="w-1/3 p-2">
                Terms & Conditions
              </label>
              <textarea
                name="notes"
                id="notes"
                cols="3"
                rows="3"
                className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
          <div></div>
        </form>
        <div className=" h-40 m-auto">
          <div className="flex text-center w-60 ">
            <div className="w-40 font-sans font-semibold">Sub Total</div>
            <span className="flex items-center">
              <BiRupee size={18} className="text-center" />
              0.00
            </span>
          </div>
          <div className="flex text-center w-60 ">
            <div className="w-40 font-sans font-semibold">Total Discount</div>
            <span className="flex items-center">
              <BiRupee size={18} className="text-center" />
              0.00
            </span>
          </div>
          <hr className="h-px bg-slate-100 m-2 w-38 mx-8 border-0" />
          <div className="flex text-center w-60 ">
            <div className="w-40 font-sans font-bold">Total Amount</div>
            <span className="flex items-center">
              <BiRupee size={18} className="text-center" />
              <span className="text-center font-bold">0.00</span>
            </span>
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
        </div>
    </>
  );
};

export default NewPurchaseOrder;

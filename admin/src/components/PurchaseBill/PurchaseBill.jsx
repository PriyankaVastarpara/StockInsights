import React, { useState, useEffect, useContext } from "react";
import { BiRupee } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";
import axios from "axios";

const PurchaseBill = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { vendorData, itemData, tableData } = useContext(SharedContext);
  // const [quantityValidationError, setQuantityValidationError] = useState("");
  const VendorNames = vendorData.map((item) => {
    return { VendorName: item.VendorName };
  });
  const Products = itemData.map((item) => {
    return {
      product: item.ItemName,
      id: item._id,
    };
  });
  const initialItem = {
    product: "",
    id: "",
    description: "",
    qty: 0,
    rate: 0,
    discount: 0,
    total: 0,
  };
  const [rows, setRows] = useState([initialItem]);
  const [formData, setFormData] = useState({
    VendorName: "",
    billNo: "",
    orderNo: "",
    invoiceDate: "",
    method: "",
    address: "",
    dueDate: "",
    subTotal: 0,
    discount: 0,
    total: 0,
    terms: "",
    remarks: "",
    items: rows.map(() => ({ ...initialItem })),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleItemChange = async (e, rowIndex, field) => {
    const { value } = e.target;

    // Create a copy of the rows state array to work with
    const updatedRows = [...rows];

    // Access the specific item being updated
    const updatedItem = { ...updatedRows[rowIndex] };

    // Update the field of the item based on the input value
    updatedItem[field] =
      field === "product" || field === "description"
        ? value
        : parseFloat(value);

        if (field === "product" && selectedProducts.includes(value)) {
          // Product already selected, show a warning and return
          alert("Product already selected!");
          return;
        }
        if (field === "product") {
          setSelectedProducts((prevSelected) => [...prevSelected, value]);
        }
    //check the available quantity
    // if (field === "qty") {
    //   const currentItem = await axios.get(
    //     `http://localhost:3000/item/${updatedItem.product}`
    //   );
    //   const availableQuantity = currentItem.data.Quantity;

    //   if (parseFloat(value) > availableQuantity) {
    //     setQuantityValidationError(
    //       "Quantity entered exceeds available quantity."
    //     );
    //     return;
    //   } else {
    //     setQuantityValidationError(""); // Clear the error message
    //   }
    // }

    // Update total if applicable
    if (field === "qty" || field === "rate" || field === "discount") {
      const qty = parseFloat(updatedItem.qty || 0);
      const rate = parseFloat(updatedItem.rate || 0);
      const discount = parseFloat(updatedItem.discount || 0);
      const total = qty * rate - discount;
      updatedItem.total = total;
    }

    // Update the specific item in the copy of the rows state array
    updatedRows[rowIndex] = updatedItem;

    // Update the rows state with the modified array
    setRows(updatedRows);
    setFormData((prevInvoice) => {
      const updatedItems = [...prevInvoice.items];
      updatedItems[rowIndex] = updatedItem;
      return { ...prevInvoice, items: updatedItems };
    });
  };
  useEffect(() => {
    updateInvoiceTotals(); // Calculate totals whenever rows change
  }, [rows]);

  const updateInvoiceTotals = () => {
    let subTotal = 0;
    let discountTotal = 0;
    let totalInvoice = 0;

    rows.forEach((item) => {
      subTotal += item.qty * item.rate;
      discountTotal += item.discount;
      totalInvoice += item.total;
    });

    setFormData((prev) => ({
      ...prev,
      subTotal,
      discount: discountTotal,
      total: totalInvoice,
    }));
  };

  const addRow = () => {
    const updatedRows = [...rows, { ...initialItem }]; // Add a new item to the rows state
    setRows(updatedRows);

    setFormData((prevInvoice) => ({
      ...prevInvoice,
      items: [...prevInvoice.items, { ...initialItem }],
    }));
  };

  const handleDeleteItem = () => {
    const updatedRows = [...rows];
    updatedRows.pop();
    setRows(updatedRows);
    updateInvoiceTotals();
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      rows.forEach(async (item) => {
        const currentItem = await axios.get(
          `http://localhost:3000/item/${item.product}`
        );

        const newQuantity = currentItem.data.Quantity + item.qty;
        const response = await axios.put(
          `http://localhost:3000/item/${item.product}`,
          { Quantity: newQuantity } // Update the item quantity with the sold quantity
        );
        console.log("Item Quantity Updated:", response?.data);
      });
      const response = await axios.post(
        "http://localhost:3000/purchasebill/create",
        formData
      );
      console.log("Response:", response?.data);
      alert("PurchaseBill saved successfully.");
    } catch (error) {
      console.error("Error:", error.response?.data.error);
    }
    console.log(rows);
  };

  const handleClear = () => {
    setFormData({
      VendorName: "",
      billNo: "",
      orderNo: "",
      invoiceDate: "",
      method: "",
      address: "",
      dueDate: "",
      subTotal: 0,
      discount: 0,
      total: 0,
      terms: "",
      remarks: "",
      items: rows.map(() => ({ ...initialItem })),
    });
  };

  return (
    <>
      <h1 className="text-xl font-sans font-semibold bg-blue-950 text-white px-3 py-1">
        New Purchase Bill
      </h1>
      <div className="w-full h-full text-sm">
        <form
          onSubmit={handleSubmit}
          className="w-full  mt-3 px-2 py-4 bg-gray-100 shadow-md rounded-md"
        >
          <div className="flex gap-12 ">
            <div className="text-sm text-gray-700 font-semibold w-1/2 flex flex-col gap-y-3 ">
              <div className="flex flex-row items-center">
                <label
                  htmlFor="VendorName"
                  className="justify-center text-gray-700 font-medium w-5/12"
                >
                  Vendor
                </label>

                <select
                  onChange={handleChange}
                  name="VendorName"
                  id="VendorName"
                  value={formData.VendorName}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                >
                  <option value="">--select--</option>
                  {VendorNames.map((vendor, index) => (
                    <option key={index} value={vendor.VendorName}>
                      {vendor.VendorName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="billNo"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Bill No.
                </label>
                <input
                  type="text"
                  id="billNo"
                  name="billNo"
                  value={formData.billNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="orderNo"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Purchase Order No
                </label>
                <input
                  type="text"
                  id="orderNo"
                  name="orderNo"
                  value={formData.orderNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex flex-row items-center">
                <label
                  htmlFor="invoiceDate"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Invoice Date
                </label>
                <input
                  type="date"
                  id="invoiceDate"
                  name="invoiceDate"
                  value={formData.invoiceDate}
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
                  <option value="">--select--</option>
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
                  htmlFor="dueDate"
                  className="text-gray-700 font-medium w-5/12"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
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
                {tableData.PurchaseInvoiceFields.map(
                  (PurchaseInvoiceField, index) => (
                    <th
                      key={index}
                      className="border border-gray-400 px-4 py-2 font-semibold text-white"
                    >
                      {PurchaseInvoiceField}
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
                    <button
                      onClick={() => handleDeleteItem()}
                      className="text-center text-red-500 hover:bg-red-200   font-bold py-1 px-1 rounded"
                    >
                      <MdDelete icon="delete-alt" size={18} />
                    </button>
                  </td>

                  <td className="text-left">
                    <select
                      onChange={(e) => handleItemChange(e, index, "product")}
                      name="product"
                      id={`product-${index}`}
                      value={item.product || ""}
                      className="ps-2 border border-gray-300 ms-auto w-full"
                    >
                      <option value="">--select--</option>
                      {Products.map((product, index) => (
                        <option key={index} value={product.id}>
                          {product.product}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="text-left">
                    <input
                      autoComplete="false"
                      value={item.description || ""}
                      onChange={(e) =>
                        handleItemChange(e, index, "description")
                      }
                      type="text"
                      name="description"
                      id={`description-${index}`}
                      className="border border-gray-300 ms-auto w-full"
                    />
                  </td>
                  <td>
                    <input
                      autoComplete="false"
                      onChange={(e) => handleItemChange(e, index, "qty")}
                      type="number"
                      name="qty"
                      id="qty"
                      className="border text-right pr-1 ps-2 border-gray-300 ms-auto w-full"
                    />
                    {/* {quantityValidationError && (
                      <span className="flex text-red-500"><MdErrorOutline size={18}/>{quantityValidationError}</span>
                    )} */}
                  </td>
                  <td>
                    <input
                      autoComplete="false"
                      onChange={(e) => handleItemChange(e, index, "rate")}
                      type="number"
                      name="rate"
                      id="rate"
                      className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2"
                    />
                  </td>
                  <td>
                    <input
                      autoComplete="false"
                      onChange={(e) => {
                        handleItemChange(e, index, "discount");
                      }}
                      type="number"
                      name="discount"
                      id="discount"
                      className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2"
                    />
                  </td>
                  <td>
                    <div className="text-right pr-1 border bg-white border-gray-300 ms-auto w-full ps-2">
                      {item.total || 0}
                    </div>
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
                  value={formData.remarks}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  value={formData.terms}
                  cols="40"
                  rows="3"
                  className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
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
                {formData.subTotal.toFixed(2)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-fit">
              <div className="w-40 font-sans font-semibold">Total Discount</div>
              <span className="flex items-center">
                <BiRupee size={18} />
                {formData.discount.toFixed(2)}
              </span>
            </div>
            <hr className="h-px bg-slate-100 mx-2 w-2/3 border-0" />
            <div className="grid grid-cols-2 gap-4 w-fit">
              <div className="w-40 font-sans font-bold">Total Amount</div>
              <span className="flex items-center">
                <BiRupee size={18} />
                <span className="text-center font-bold">
                  {formData.total.toFixed(2)}
                </span>
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
          Save
        </button>
        <Link to="/purchase-orders">
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
        <Link to={`/print-bill/${encodeURIComponent(JSON.stringify(formData))}`}>
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

export default PurchaseBill;

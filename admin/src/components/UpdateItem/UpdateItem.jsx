import React, { useState, useEffect,useContext} from "react";
import { RxCross2 } from "react-icons/rx";
import Drag from "../Drag";
import axios from "axios";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";


const UpdateItem = ({ itemId,onClose }) => {
  const { categoryData,vendorData } = useContext(SharedContext);

  const CategoryNames = categoryData.map((item) => {
    return { Category: item.CategoryName };
  });
  const [item, setItem] = useState({
    ItemName: "",
    ItemCode: "",
    Category: "",
    ItemType: "",
    Description: "",
    StockUnit: "",
    Quantity: "",
    UnitPrice: "",
    ReorderPoint: "",
    ExpiryDate: "",
    PurchasePrice: "",
    MRP: "",
    MinimumPrice: "",
    SellingPrice: "",
    Discount: "",
    TotalAmount: "",
  });
 
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/item/${itemId}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };
    fetchItemData();
  },[itemId]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  
  const handleUpdateClick = async () => {
    
    if (window.confirm("Are you sure you want to update this Item?")) {
      try {
        await axios.put(`http://localhost:3000/item/${itemId}`,item); 
        onClose();
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(formValues);
    console.log(formValues);
  };
  const itemTypes = [
    { id: 1, name: "Finished Goods" },
    { id: 2, name: "Raw Materials" },
    { id: 3, name: "Semi Finished Goods" },
    { id: 4, name: "Packaging Material" },
    { id: 5, name: "Service" },
    { id: 6, name: "Tools" },
    { id: 7, name: "Capital Goods" },
    { id: 8, name: "Others" },
  ];

  const stockUnits = [
    { id: 1, name: "Box", symbol: "box" },
    { id: 2, name: "Gram", symbol: "g" },
    { id: 3, name: "Litre", symbol: "l" },
    { id: 4, name: "Millilitre", symbol: "ml" },
    { id: 5, name: "Metre", symbol: "m" },
    { id: 6, name: "Centimetre", symbol: "cm" },
    { id: 7, name: "Inch", symbol: "in" },
    { id: 8, name: "Foot", symbol: "ft" },
    { id: 9, name: "Square Metre", symbol: "m2" },
    { id: 10, name: "Square Foot", symbol: "ft2" },
    { id: 11, name: "Unit", symbol: "unit" },
    { id: 12, name: "Dozen", symbol: "dozen" },
    { id: 13, name: "Kg", symbol: "kg" },
    { id: 14, name: "Packet", symbol: "packet" },
    { id: 15, name: "Bottle", symbol: "bottle" },
    { id: 16, name: "Bag", symbol: "bag" },
    { id: 17, name: "Piece", symbol: "piece" },
    { id: 18, name: "Pair", symbol: "pair" },
    { id: 19, name: "Bundle", symbol: "bundle" },
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30">
      <div className="relative w-8/12 bg-white rounded-lg p-2 h-5/6 overflow-y-scroll">
        <button
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <RxCross2 size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
        <div className="grid grid-cols-3 gap-6 border rounded-md p-3 pl-9 my-2 text-sm shadow-md">
          <div className="flex flex-col col-span-2 gap-y-4">
            <div className="flex flex-row ">
              <label className="text-gray-700 font-medium">Item Name</label>
              <input
                onChange={handleInputChange}
                value={item.ItemName}
                type="text"
                name="ItemName"
                id="ItemName"
                autoComplete="given-name"
                className="border ms-auto pl-1 w-10/12 h-7  focus:outline-none  focus:  border-gray-500 rounded-md"
              />
            </div>

            <div className="flex flex-row">
              <label className="text-gray-700 font-medium">Item Code</label>
              <input
                onChange={handleInputChange}
                value={item.ItemCode}
                type="text"
                name="ItemCode"
                id="ItemCode"
                autoComplete="given-name"
                className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
              />
            </div>

            <div className="flex flex-row">
              <label className="text-gray-700 font-medium ">Category</label>
              <select
                  onChange={handleInputChange}
                  name="Category"
                  id="Category"
                  value={item.Category}
                  className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                >
                  <option value="">--select--</option>
                  {CategoryNames.map((category, index) => (
                    <option key={index} value={category.Category}>
                      {category.Category}
                    </option>
                  ))}
                </select>
            </div>

            <div className="flex flex-row">
              <label className="text-gray-700 font-medium">Item Type</label>
              <select
                onChange={handleInputChange}
                value={item.ItemType}
                name="ItemType"
                id="ItemType"
                className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
              >
                 <option value="">--select--</option>
                {itemTypes.map((itemType) => (
                  <option key={itemType.id} value={itemType.name}>
                    {itemType.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-row">
              <label className="text-gray-700 font-medium">Description</label>
              <textarea
                onChange={handleInputChange}
                value={item.Description}
                name="Description"
                id="Description"
                autoComplete="given-name"
                className="border ms-auto pl-1 w-10/12 resize-none  h-16 focus:outline-none  focus:border-gray-500 rounded-md"
              />
            </div>

           
            <div className="flex flex-row">
              <label className="text-gray-700 font-medium">Stock Unit</label>
              <select
                onChange={handleInputChange}
                value={item.StockUnit}
                name="StockUnit"
                id="StockUnit"
                className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
              >
                 <option value="">--select--</option>
                {stockUnits.map((stockUnit) => (
                  <option key={stockUnit.id} value={stockUnit.name}>
                    {stockUnit.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-row mt-10 justify-between gap-x-5">
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">Quantity</label>
                  <input
                    onChange={handleInputChange}
                    value={item.Quantity}
                    type="number"
                    name="Quantity"
                    id="Quantity"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">
                    Unit Price
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={item.UnitPrice}
                    type="number"
                    name="UnitPrice"
                    id="UnitPrice"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">
                    Reorder Point
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={item.ReorderPoint}
                    type="number"
                    name="ReorderPoint"
                    id="ReorderPoint"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">
                    Expiry Date
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={item.ExpiryDate}
                    type="date"
                    name="ExpiryDate"
                    id="ExpiryDate"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7 focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">
                    Purchase Price
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={item.PurchasePrice}
                    type="number"
                    name="PurchasePrice"
                    id="PurchasePrice"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12 h-7 focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">MRP</label>
                  <input
                    onChange={handleInputChange}
                    value={item.MRP}
                    type="number"
                    name="MRP"
                    id="MRP"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">
                    Minimum Price
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={item.MinimumPrice}
                    type="number"
                    name="MinimumPrice"
                    id="MinimumPrice"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">
                    Selling Price
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={item.SellingPrice}
                    type="number"
                    name="SellingPrice"
                    id="SellingPrice"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">Discount</label>
                  <input
                    onChange={handleInputChange}
                    value={item.Discount}
                    type="number"
                    name="Discount"
                    id="Discount"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-row">
                  <label className="text-gray-700 font-medium">
                    Total Amount
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={item.TotalAmount}
                    type="number"
                    name="TotalAmount"
                    id="TotalAmount"
                    autoComplete="given-name"
                    className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-y-2">
            <div className="flex flex-row">
              <Drag />
            </div>
          </div> */}
        </div>
        <div className="flex justify-start">
        <Link to="/products"><button
            type="submit"
            onClick={handleUpdateClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Update
          </button></Link>
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
  );
};

export default UpdateItem;

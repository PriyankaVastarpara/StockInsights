import React, { useState } from "react";
import Drag from "../Drag";

const AddItems = () => {
  
  const [item, setItem] = useState({
    ItemName: "",
    ItemCode: "",
    Category: "",
    ItemType: "",
    Description: "",
    Vendor:"",
    StockUnit: "",
    Quantity: "",
    UnitPrice:"",
    ReorderPoint: "",
    ExpiryDate: "",
    PurchasePrice: "",
    MRP: "",
    MinimumPrice: "",
    SellingPrice: "",
    Discount: "",
    TotalAmount:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {   
    console.log(item);
  };

    const handleCancel = () => {
      setItem({
        ItemName: "",
        ItemCode: "",
        Category: "",
        ItemType: "",
        Description: "",
        Vendor:"",
        StockUnit: "",
        Quantity: "",
        UnitPrice:"",
        ReorderPoint: "",
        ExpiryDate: "",
        PurchasePrice: "",
        MRP: "",
        MinimumPrice: "",
        SellingPrice: "",
        Discount: "",
        TotalAmount:""
      });
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
    <>
      <h1 className="text-xl font-sans font-semibold bg-blue-950 text-white px-3 py-1">Add New Item</h1>
      <div className="grid grid-cols-3 gap-6 border rounded-md p-3 pl-9 my-2 text-sm shadow-md">
        <div className="flex flex-col col-span-2 gap-y-4">
          <div className="flex flex-row ">
            <label className="text-gray-700 font-medium">Item Name</label>
            <input onChange={handleChange} value={item.ItemName} type="text" name="ItemName" id="ItemName" autoComplete="given-name" className="border ms-auto pl-1 w-10/12 h-7  focus:outline-none  focus:border-gray-500 rounded-md"/>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 font-medium">Item Code</label>
            <input onChange={handleChange} value={item.ItemCode} type="text" name="ItemCode" id="ItemCode" autoComplete="given-name" className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 font-medium ">Category</label>
            <input onChange={handleChange} value={item.Category} type="text" name="Category" id="Category" autoComplete="given-name" className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
          </div>

        

          <div className="flex flex-row">
            <label className="text-gray-700 font-medium">Item Type</label>
            <select onChange={handleChange} value={item.ItemType} name="ItemType" id="ItemType" className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md">
              {itemTypes.map((itemType) => (
                <option key={itemType.id} value={itemType.name}>
                  {itemType.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 font-medium">Description</label>
            <textarea onChange={handleChange} value={item.Description} name="Description" id="Description" autoComplete="given-name" className="border ms-auto pl-1 w-10/12 resize-none  h-16 focus:outline-none  focus:border-gray-500 rounded-md" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 font-medium">Vendor</label>
            <input onChange={handleChange} value={item.Vendor} type="text" name="Vendor" id="Vendor" autoComplete="given-name" className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
          </div>
          <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Stock Unit</label>
                <select onChange={handleChange} value={item.StockUnit} name="StockUnit" id="StockUnit" className="border ms-auto pl-1 w-10/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md">
                  {stockUnits.map((stockUnit) => (
                    <option key={stockUnit.id} value={stockUnit.name}>
                      {stockUnit.name}
                    </option>
                  ))}
                </select>
              </div>

          <div className="flex flex-row mt-10 justify-between">
            <div className="flex flex-col gap-y-2">
              

              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Quantity</label>
                <input onChange={handleChange} value={item.Quantity} type="number" name="Quantity" id="Quantity" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>
              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Unit Price</label>
                <input onChange={handleChange} value={item.UnitPrice} type="number" name="UnitPrice" id="UnitPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>
              

              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Reorder Point</label>
                <input onChange={handleChange} value={item.ReorderPoint} type="number" name="ReorderPoint" id="ReorderPoint" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>
  
              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Expiry Date</label>
                <input onChange={handleChange} value={item.ExpiryDate} type="date" name="ExpiryDate" id="ExpiryDate" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7 focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>

             
              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Purchase Price</label>
                <input onChange={handleChange} value={item.PurchasePrice} type="number" name="PurchasePrice" id="PurchasePrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12 h-7 focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>
             
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">MRP</label>
                <input onChange={handleChange} value={item.MRP} type="number" name="MRP" id="MRP" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Minimum Price</label>
                <input onChange={handleChange} value={item.MinimumPrice} type="number" name="MinimumPrice" id="MinimumPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Selling Price</label>
                <input onChange={handleChange} value={item.SellingPrice} type="number" name="SellingPrice" id="SellingPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>

             

              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Discount</label>
                <input onChange={handleChange} value={item.Discount} type="number" name="Discount" id="Discount" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>
              <div className="flex flex-row">
                <label className="text-gray-700 font-medium">Total Amount</label>
                <input onChange={handleChange} value={item.TotalAmount} type="number" name="TotalAmount" id="TotalAmount" autoComplete="given-name" className="border ms-auto pl-1 w-6/12  h-7  focus:outline-none  focus:border-gray-500 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row">
            <Drag/>
          </div>
        </div>
      </div>

      <div className="mx-2 flex flex-row gap-x-3 justify-start my-5">
        <button
            type="submit"
            className="bg-blue-500  text-white text-md py-2 px-4 rounded-md hover:bg-blue-600  border focus:border-blue-300" onClick={handleSubmit}>
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel} // Call the cancel function on button click
            className="bg-gray-300  font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
          >
            Cancel
          </button>
      </div>
    </>
  );
};

export default AddItems;
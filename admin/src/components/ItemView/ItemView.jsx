import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";


const ItemView = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/item/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItemData();
  }, [id]);

  return (
    <div className="container mx-auto mt-5 p-5 text-center">
      <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
      {item ? (
     <div className="flex justify-center">
        <div className="bg-white shadow-md p-4 rounded-md  text-left w-2/3 "> 
          <p className="text-lg font-semibold text-blue-600">Name : <span className="text-black font-medium">{item.ItemName}</span></p>
          <p className="text-lg font-semibold text-blue-600">Code : <span className="text-black font-medium">{item.ItemCode}</span></p>
          <p className="text-lg font-semibold text-blue-600">Category : <span className="text-black font-medium">{item.Category}</span></p>
          <p className="text-lg font-semibold text-blue-600">ItemType : <span className="text-black font-medium">{item.ItemType}</span></p>
          <p className="text-lg font-semibold text-blue-600">Description : <span className="text-black font-medium">{item.Description}</span></p>
          <p className="text-lg font-semibold text-blue-600">VendorName : <span className="text-black font-medium">{item.VendorName}</span></p>
          <p className="text-lg font-semibold text-blue-600">StockUnit : <span className="text-black font-medium">{item.StockUnit}</span></p>
          <p className="text-lg font-semibold text-blue-600">Quantity : <span className="text-black font-medium">{item.Quantity}</span></p>
          <p className="text-lg font-semibold text-blue-600">UnitPrice : <span className="text-black font-medium">{item.UnitPrice}</span></p>
          <p className="text-lg font-semibold text-blue-600">ReorderPoint : <span className="text-black font-medium">{item.ReorderPoint}</span></p>
          <p className="text-lg font-semibold text-blue-600">ExpiryDate : <span className="text-black font-medium">{format(new Date(item.ExpiryDate), "dd-MM-yyyy")}</span></p>
          <p className="text-lg font-semibold text-blue-600">PurchasePrice : <span className="text-black font-medium">{item.PurchasePrice}</span></p>
          <p className="text-lg font-semibold text-blue-600">MRP : <span className="text-black font-medium">{item.MRP}</span></p>
          <p className="text-lg font-semibold text-blue-600">MinimumPrice : <span className="text-black font-medium">{item.MinimumPrice}</span></p>
          <p className="text-lg font-semibold text-blue-600">SellingPrice : <span className="text-black font-medium">{item.SellingPrice}</span></p>
          <p className="text-lg font-semibold text-blue-600">Discount : <span className="text-black font-medium">{item.Discount}</span></p>
          <p className="text-lg font-semibold text-blue-600">TotalAmount : <span className="text-black font-medium">{item.TotalAmount}</span></p>
        </div>
        </div>
      ) : (
        <p className="text-lg font-semibold">Loading...</p>
      )}
    </div>
  );
};

export default ItemView;

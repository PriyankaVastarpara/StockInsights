import React, { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SharedContext from "../../contexts/SharedContext";
import { format } from "date-fns";


const PurchaseOrderView = () => {
  const { itemData } = useContext(SharedContext);
  const { id } = useParams();
  const [bill, setBill] = useState(null);

  // Function to get product name by product ID
  const getProductName = (productId) => {
    const product = itemData.find((item) => item._id === productId);
    return product ? product.ItemName : "Unknown Product";
  };
  useEffect(() => {
    const fetchBillData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/purchasebill/${id}`);
        setBill(response.data);
      } catch (error) {
        return <div>Error fetching order data: {error.message}</div>;
      }
    };

    fetchBillData();
  }, [id]);

  if (!bill) {
    return <div>Loading...</div>;
  }
 
    return (
        <div className=" mt-8 mx-auto py-4 px-8 max-w-3xl border border-gray-300">
          <header className="mb-4">
            <div className="flex justify-between mb-2">
              <div className="text-left">
                <p className="text-sm">Bill From:</p>
                <h2 className="text-lg font-semibold">{bill.VendorName}</h2>
              </div>
              <div className="text-right">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold font-sans tracking-wide">
                    PURCHASE ORDER
                  </h1>
                  <p className="text-lg font-medium">Bill# {bill.billNo}</p>
                </div>
                <p className="text-md mb-2">Order No: {bill.orderNo}</p>
                <p className="text-md mb-2">Bill Date:{format(new Date(bill.invoiceDate), "dd-MM-yyyy")}</p>
                <p className="text-md mb-2">
                  Due Date: {format(new Date(bill.dueDate), "dd-MM-yyyy")}
                </p>
              </div>
            </div>
          </header>
          <main>
            <table className="mt-6 w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Item</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Discount</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {bill.items.map((item,index) => (
                  <tr key={index} className="border-t text-center">
                    <td className="py-2 px-4">{index+1}</td>
                    {/* <td className="py-2 px-4">{item.product}</td> */}
                    <td className="py-2 px-4">{getProductName(item.product)}</td>
                    <td className="py-2 px-4">{item.qty}</td>
                    <td className="py-2 px-4">₹ {item.rate.toFixed(2)}</td>
                    <td className="py-2 px-4">₹ {item.discount.toFixed(2)}</td>
                    <td className="py-2 px-4">
                      ₹ {(item.total).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8">
              <div className="flex justify-end">
                <p className="pr-4">
                  <span className="font-semibold text-md mb-2">Sub Total : </span> ₹ 
                  {bill.subTotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-end">
                <p className="pr-4">
                  <span className="font-semibold text-md mb-2">Total Discount : </span> ₹ 
                  {bill.discount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-end">
                <span className="font-bold text-md mb-2">
                  Total Amount : ₹ {bill.total.toFixed(2)}
                </span>
              </div>
            </div>
          </main>
        </div>
      );
};

export default PurchaseOrderView;

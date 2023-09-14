import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CustomerView = () => {
  const { id } = useParams(); 
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/customer/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();
  }, [id]);

  return (
    <div className="container mx-auto mt-5 p-5 text-center">
      <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
      {customer ? (
     <div className="flex justify-center">
        <div className="bg-white shadow-md p-4 rounded-md  text-left w-2/3 "> 
          <p className="text-lg font-semibold text-blue-600">Name : <span className="text-black font-medium">{customer.CustomerName}</span></p>
          <p className="text-lg font-semibold text-blue-600">Code : <span className="text-black font-medium">{customer.Code}</span></p>
          <p className="text-lg font-semibold text-blue-600">Email : <span className="text-black font-medium">{customer.Email}</span></p>
          <p className="text-lg font-semibold text-blue-600">Phone no. : <span className="text-black font-medium">{customer.Phone}</span></p>
          <p className="text-lg font-semibold text-blue-600">Address : <span className="text-black font-medium">{customer.Address}</span></p>
          <p className="text-lg font-semibold text-blue-600">Country : <span className="text-black font-medium">{customer.Country}</span></p>
          <p className="text-lg font-semibold text-blue-600">State : <span className="text-black font-medium">{customer.State}</span></p>
          <p className="text-lg font-semibold text-blue-600">City : <span className="text-black font-medium">{customer.City}</span></p>
          <p className="text-lg font-semibold text-blue-600">Pincode : <span className="text-black font-medium">{customer.Pincode}</span></p>
        </div>
        </div>
      ) : (
        <p className="text-lg font-semibold">Loading...</p>
      )}
    </div>
  );
};

export default CustomerView;

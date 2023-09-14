import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VendorView = () => {
  const { id } = useParams(); 
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/vendor/${id}`);
        setVendor(response.data);
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      }
    };

    fetchVendorData();
  }, [id]);

  return (
    <div className="container mx-auto mt-5 p-5 text-center">
      <h2 className="text-2xl font-semibold mb-4">Vendor Details</h2>
      {vendor ? (
     <div className="flex justify-center">
        <div className="bg-white shadow-md p-4 rounded-md  text-left w-2/3 "> 
          <p className="text-lg font-semibold text-blue-600">Name : <span className="text-black font-medium">{vendor.VendorName}</span></p>
          <p className="text-lg font-semibold text-blue-600">Code : <span className="text-black font-medium">{vendor.Code}</span></p>
          <p className="text-lg font-semibold text-blue-600">CompanyName : <span className="text-black font-medium">{vendor.CompanyName}</span></p>
          <p className="text-lg font-semibold text-blue-600">Email : <span className="text-black font-medium">{vendor.Email}</span></p>
          <p className="text-lg font-semibold text-blue-600">Phone no. : <span className="text-black font-medium">{vendor.Phone}</span></p>
          <p className="text-lg font-semibold text-blue-600">Address : <span className="text-black font-medium">{vendor.Address}</span></p>
          <p className="text-lg font-semibold text-blue-600">Country : <span className="text-black font-medium">{vendor.Country}</span></p>
          <p className="text-lg font-semibold text-blue-600">State : <span className="text-black font-medium">{vendor.State}</span></p>
          <p className="text-lg font-semibold text-blue-600">City : <span className="text-black font-medium">{vendor.City}</span></p>
          <p className="text-lg font-semibold text-blue-600">Pincode : <span className="text-black font-medium">{vendor.Pincode}</span></p>
        </div>
        </div>
      ) : (
        <p className="text-lg font-semibold">Loading...</p>
      )}
    </div>
  );
};

export default VendorView;

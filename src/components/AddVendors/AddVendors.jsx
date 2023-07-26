import React, { useState } from "react";

const AddVendors = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone1:"",
    phone2:"",
    code:"",
    address: "",
    country:"",
    state:"",
    city:"",
    pincode:""
  });
 
  //Handle change for Input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //Handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  //Handle clear button
  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone1: "",
      phone2: "",
      code: "",
      address: "",
      country: "",
      state:"",
      city:"",
      pincode:""
    });
  };

  return (
    <div className="p-4  flex justify-center">
      <form className="w-full max-w-screen-sm rounded-md shadow-md p-6">
        <h2 className="text-xl font-sans font-semibold mb-4 bg-slate-100">
          Add New Vendor
        </h2>
        <div className="text-sm">
         
          <div className="mb-4 flex">
            <label
              htmlFor="name"
              className=" text-gray-700 font-semibold w-1/2 mb-2"
            >
              Vendor Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold w-1/2 mb-2"
            >
              Vendor Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-8 border rounded-lg py-2 px-3 text-gray-700 focus:outline-none  focus:border-gray-500"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold w-1/2 mb-2"
            >
              Vendor Phone
            </label>
            <input
              type="text"
              id="phone1"
              name="phone1"
              value={formData.phone1}
              onChange={handleChange}
              className="w-1/2 mr-1 h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              placeholder="WorkPhone"
              required
            />
             <input
              type="text"
              id="phone2"
              name="phone2"
              value={formData.phone2}
              onChange={handleChange}
              className="w-1/2 h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              placeholder=""
              required
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="code"
              className=" text-gray-700 font-semibold w-1/2 mb-2"
            >
               GLCode
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              placeholder="001"
              readOnly={true}
              required
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold w-1/2 mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              rows="3"
              placeholder="Enter Address here..."
              required
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="country"
              className="block text-gray-700 font-semibold w-1/2 mb-2"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full h-9 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
              required
            >
              <option value="">-- Select a country --</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="US">US</option>
            </select>
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="state"
              className="block text-gray-700 font-semibold w-1/2 mb-2"
            >
              State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full h-9 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
              required
            >
              <option value="">-- Select a State --</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Rajsthan">Rajsthan</option>
            </select>
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="city"
              className=" text-gray-700 font-semibold w-1/2 mb-2"
            > 
            City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="pincode"
              className=" text-gray-700 font-semibold w-1/2 mb-2"
            > 
            Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              required
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none border focus:border-blue-300"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel} // Call the reset function on button click
            className="bg-gray-300 mx-2 font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVendors;

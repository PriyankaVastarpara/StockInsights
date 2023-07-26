import React, { useState } from "react";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  //Handle cancel button
  const handleCancel = () => {
    setFormData({
      code: "",
      name: "",
      description: "",
    });
  };

  return (
    <div className="p-4  flex justify-center">
      <form className="w-full max-w-lg rounded-md shadow-md p-6">
        <h2 className="text-xl font-sans font-semibold mb-4 bg-slate-100">
          Add New Category
        </h2>
        <div className="text-sm">
          <div className="mb-4 flex">
            <label
              htmlFor="code"
              className=" text-gray-700 font-semibold w-1/2 mb-2"
            >
              Category Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              placeholder="001"
              required
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="name"
              className=" text-gray-700 font-semibold w-1/2 mb-2"
            >
              Category Name
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
              htmlFor="description"
              className="block text-gray-700 font-semibold w-1/2 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
              rows="3"
              placeholder="Add description here..."
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
        <div></div>
      </form>
    </div>
  );
};

export default AddCategory;

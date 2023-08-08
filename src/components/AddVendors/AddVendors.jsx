
import React, { useContext, useState } from "react";
import Drag from "../Drag";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";

const AddVendors = () => {
  const { formData, setVendorData } = useContext(SharedContext);
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVendorData(formValues);
    console.log(formValues);
  };

  //Handle cancel button
  const handleClear = () => {
    setFormValues({});
  };
  return (
    <>
          <h1 className="text-xl font-sans font-semibold bg-blue-950 text-white px-3 py-1">Add New Vendor</h1>
          <div className="grid grid-cols-3 gap-6 border rounded-md p-3 pl-9 my-2 text-sm shadow-md ">
      <form
        className="flex flex-col col-span-2 gap-y-4"
        onSubmit={handleSubmit}
      >
        <div className="text-sm">
          {formData.vendor.fields.map((field) => (
            <div key={field.name} className="mb-4 flex items-center">
              <label
                htmlFor={field.name}
                className=" text-gray-700 font-semibold w-1/4 mb-2"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formValues[field.name] || ""}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500 resize-none"
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formValues[field.name] || ''}
                  onChange={handleChange}
                  className="w-full h-8 border rounded-md py-1 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
                >
                  <option value="">--Select--</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ): (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formValues[field.name] || ""}
                  onChange={handleChange}
                  className="w-full h-8 border rounded-md py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
                />
              )}
            </div>
          ))}
        </div>
      </form>
      <div className="flex flex-col gap-y-2">
          <div className="flex flex-row">
            <Drag/>
          </div>
        </div>
    </div>
    <div className="mx-2 flex flex-row gap-x-3 justify-start my-5">
        <button
          type="submit"
          className="bg-blue-500  text-white text-md py-2 px-4 rounded-md hover:bg-blue-600  border focus:border-blue-300"
          onClick={handleSubmit}
        >
          Save
        </button>
        <Link to="/vendors">
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
      </div>
    </>
  );
};

export default AddVendors;


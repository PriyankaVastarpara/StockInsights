
import React, { useContext, useState } from "react";
import SharedContext from "../../contexts/SharedContext";

const AddCustomers = () => {
  const { formData, setCustomerData } = useContext(SharedContext);
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomerData(formValues);
    console.log(formValues);
  };

  //Handle cancel button
  const handleCancel = () => {
    setFormValues({});
  };
  return (
    <>
    <h2 className="text-xl max-w-screen-sm m-auto p-1 text-white text-center font-sans font-semibold mb-3 bg-blue-900">
    Add New Customer
  </h2>
    <div className="p-4  flex justify-center">
      <form
        className="w-full max-w-screen-sm rounded-md shadow-md p-6 "
        onSubmit={handleSubmit}
      >
       
        <div className="text-sm">
          {formData.customer.fields.map((field) => (
            <div key={field.name} className="mb-4 flex">
              <label
                htmlFor={field.name}
                className=" text-gray-700 font-semibold w-1/2 mb-2"
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
                  className="w-full border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formValues[field.name] || ''}
                  onChange={handleChange}
                  className="w-full h-9 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
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
                  className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none border focus:border-blue-300"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel} // Call the cancel function on button click
            className="bg-gray-300 mx-2 font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddCustomers;


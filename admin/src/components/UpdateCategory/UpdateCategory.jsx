import React, { useState, useContext,useEffect } from "react";
import {RxCross2} from "react-icons/rx";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";
import Drag from "../Drag";
import axios from "axios";

const UpdateCategory = ({ categoryId,onClose }) => {
  const { formData } = useContext(SharedContext);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {

    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/category/${categoryId}`);
        setFormValues(response.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };
    fetchCategoryData();
  },[categoryId]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  
  const handleUpdateClick = async () => {
    
    if (window.confirm("Are you sure you want to update this Category?")) {
      try {
        await axios.put(`http://localhost:3000/category/${categoryId}`,formValues); 
        onClose();
      } catch (error) {
        console.error('Error updating category:', error);
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(formValues);
    console.log(formValues);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30">
      <div className="relative w-8/12 bg-white rounded-lg p-8">
        <button
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <RxCross2 size={24}/>
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
        <div className="grid grid-cols-3 gap-6 border rounded-md p-3 pl-9 my-2 text-sm shadow-md">
          <form
            className="flex flex-col col-span-2 gap-y-4"
            onSubmit={handleSubmit}
          >
            <div className="text-sm">
              {formData.category.fields.map((field) => (
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
                      onChange={handleInputChange}
                      className="w-full border rounded-md py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500 resize-none"
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={formValues[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full h-8 border rounded-md py-1 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
                    >
                      <option value="">--Select--</option>
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={formValues[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full h-8 border rounded-md py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-start">
            <Link to="/categories"><button
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
          </form>
          {/* <div className="flex flex-col gap-y-2">
            <div className="flex flex-row">
              <Drag />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;

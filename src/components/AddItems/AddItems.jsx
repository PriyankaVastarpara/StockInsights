// import React, { useState } from "react";

// const AddItems = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     code: "",
//     category: "",
//     description: "",
//     quantity: "",
//     vendor: "",
//     manufacturer: "",
//     purchasePrice: "",
//     unitPrice: "",
//     discount: "",
//     sellingPrice: "",
//     reorderPoint: "",
//     expiryDate: "",
//     totalAmount: "",
//   });

//   //Handle change for Input field
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   //Handle submit button
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(formData);
//   };
//   //Handle clear button
//   const handleCancel = () => {
//     setFormData({
//       name: "",
//       code: "",
//       category: "",
//       description: "",
//       quantity: "",
//       vendor: "",
//       manufacturer: "",
//       purchasePrice: "",
//       unitPrice: "",
//       discount: "",
//       sellingPrice: "",
//       reorderPoint: "",
//       expiryDate: "",
//       totalAmount: "",
//     });
//   };

//   return (
//     <div className="p-4  flex justify-center">
//       <form className="w-full max-w-screen-sm rounded-md shadow-md p-6 ">
//         <h2 className="text-xl font-sans font-semibold mb-4 bg-slate-100">
//           Add New Item
//         </h2>
//         <div className="text-sm">
//           <div className="mb-4 flex">
//             <label
//               htmlFor="name"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//                Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               placeholder="John Doe"
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="code"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Code
//             </label>
//             <input
//               type="text"
//               id="code"
//               name="code"
//               value={formData.code}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               placeholder="001"
//               readOnly={true}
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="category"
//               className="block text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full h-9 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
//               required
//             >
//               <option value=""></option>
//               <option value="Medicine">Medicine</option>
//               <option value="Syrup">Syrup</option>
//             </select>
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="description"
//               className="block text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               rows="3"
//               required
//             />
//           </div>        
//           <div className="mb-4 flex">
//             <label
//               htmlFor="vendor"
//               className="block text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Vendor
//             </label>
//             <select
//               id="vendor"
//               name="vendor"
//               value={formData.vendor}
//               onChange={handleChange}
//               className="w-full h-9 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
//               required
//             >
//               <option value=""></option>
//               <option value="abc">abc</option>
//               <option value="xyz">xyz</option>
//             </select>
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="manufacturer"
//               className="block text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Manufacturer
//             </label>
//             <select
//               id="manufacturer"
//               name="manufacturer"
//               value={formData.manufacturer}
//               onChange={handleChange}
//               className="w-full h-9 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500"
//               required
//             >
//               <option value=""></option>
//               <option value="abc">abc</option>
//               <option value="xyz">xyz</option>
//             </select>
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="quantity"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Quantity
//             </label>
//             <input
//               type="text"
//               id="quantity"
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               required
//             />
//           </div> 
//           <div className="mb-4 flex">
//             <label
//               htmlFor="purchasePrice"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Purchase Price
//             </label>
//             <input
//               type="text"
//               id="purchasePrice"
//               name="purchasePrice"
//               value={formData.purchasePrice}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="unitPrice"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Unit Price
//             </label>
//             <input
//               type="text"
//               id="unitPrice"
//               name="unitPrice"
//               value={formData.unitPrice}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="discount"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Discount
//             </label>
//             <input
//               type="text"
//               id="discount"
//               name="discount"
//               value={formData.discount}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="sellingPrice"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Selling Price
//             </label>
//             <input
//               type="text"
//               id="sellingPrice"
//               name="sellingPrice"
//               value={formData.sellingPrice}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="reorderPoint"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//              Reorder Point
//             </label>
//             <input
//               type="text"
//               id="reorderPoint"
//               name="reorderPoint"
//               value={formData.reorderPoint}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="expiryDate"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//             Expiry Date
//             </label>
//             <input
//               type="date"
//               id="expiryDate"
//               name="expiryDate"
//               value={formData.expiryDate}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               required
//             />
//           </div>
//           <div className="mb-4 flex">
//             <label
//               htmlFor="totalAmount"
//               className=" text-gray-700 font-semibold w-1/2 mb-2"
//             >
//               Total Amount
//             </label>
//             <input
//               type="text"
//               id="totalAmount"
//               name="totalAmount"
//               value={formData.totalAmount}
//               onChange={handleChange}
//               className="w-full h-8 border rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500"
//               placeholder="001"
//              // readOnly={true}
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-blue-500 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none border focus:border-blue-300"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={handleCancel} // Call the reset function on button click
//             className="bg-gray-300 mx-2 font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddItems;

import React, { useContext, useState } from "react";
import SharedContext from "../../contexts/SharedContext";

const AddItems = () => {
  const { formData, setItemData } = useContext(SharedContext);
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemData(formValues);
    console.log(formValues);
  };

  //Handle cancel button
  const handleCancel = () => {
    setFormValues({});
  };
  return (
    <div className="p-4  flex justify-center">
      <form
        className="w-full max-w-screen-sm rounded-md shadow-md p-6 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-sans font-semibold mb-4 bg-slate-100">
          Add New Item
        </h2>
        <div className="text-sm">
          {formData.item.fields.map((field) => (
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
  );
};

export default AddItems;



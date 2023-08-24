
import React, { useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';

const Drag = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const imageFile = e.dataTransfer.files[0];
    setFile(imageFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
  };

  return (
    <label
      htmlFor="imageInput"
      className=" w-36 h-fit border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center space-y-4 cursor-pointer"
    >
      <div
        className="w-28 h-28 bg-gray-100 border-2 border-solid border-gray-300 rounded-md flex items-center justify-center overflow-hidden"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Selected"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-gray-400">
            <IoMdCloudUpload className="h-12 w-12 m-auto" />
            <p className="mt-2 font-medium text-center">Drag &amp; Drop or Click to Upload</p>
          </div>
        )}
      </div>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleInputChange}
      />
    </label>
  );
};

export default Drag;



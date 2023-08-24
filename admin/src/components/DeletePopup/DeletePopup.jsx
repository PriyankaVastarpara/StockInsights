import React from 'react';

const DeletePopup = ({ onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500">
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="mb-4">Are you sure you want to delete ?</p>
        <div className="flex justify-end">
          <button
            className="px-3 py-1 mr-2 bg-red-500 text-white rounded"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="px-3 py-1 bg-gray-300 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;

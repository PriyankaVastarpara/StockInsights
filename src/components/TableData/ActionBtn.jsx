import React from 'react'
import {BiSolidPencil} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
const ActionBtn = () => {
  return (
    <div className='flex justify-center'>
        <button
    className="items-center  hover:bg-blue-700  font-bold py-1 px-1 rounded"
  >
    <BiSolidPencil icon="pencil-alt" size={18} className="mr-2" />

  </button>
  <button
    className="items-center  hover:bg-blue-700  font-bold py-1 px-1 rounded"
  >
    <MdDelete icon="delete-alt" size={18} className="" />

  </button>
  </div>
  )
}

export default ActionBtn
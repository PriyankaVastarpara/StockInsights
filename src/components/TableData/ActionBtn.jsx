import React from 'react'
import {BiSolidPencil} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
const ActionBtn = () => {
  return (
    <div className='flex justify-center gap-2'>
        <button
    className="items-center  hover:bg-blue-200  font-bold py-1 px-1 rounded"
  >
    <BiSolidPencil icon="pencil-alt" size={18} />

  </button>
  <button
    className="items-center  hover:bg-blue-200   font-bold py-1 px-1 rounded"
  >
    <MdDelete icon="delete-alt" size={18}  />

  </button>
  </div>
  )
}

export default ActionBtn
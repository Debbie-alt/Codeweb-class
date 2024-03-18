import React from 'react'
import { MdCancel } from "react-icons/md";


const PopUp = ({movieName, PopUp, popupMessage, setPopup, toastColor}) => {
  return (
      <div className={`bg-white flex justify-between shadow-lg border-l-8 ${toastColor}  w-3/4 md:w-1/2 ${PopUp} mx-auto rounded-lg top-0 p-5`}> 


      {popupMessage}
      <MdCancel  className='text-red-500 text-md md:text-lg self end' onClick={()=>setPopup('hidden')}/>
</div>
  )
}

export default PopUp
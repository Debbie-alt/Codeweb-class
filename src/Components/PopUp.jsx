import React from 'react'
import { MdCancel } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const PopUp = ({movieName, PopUp, popupMessage, setPopup, toastColor}) => {
      useEffect(() => {
            AOS.init();
          }, [])
  return (
      <div className={`bg-white toast flex justify-between shadow-lg border-l-8 ${toastColor}  w-3/4 md:w-1/2 ${PopUp} mx-auto rounded-lg top-0 p-5`} > 


      {popupMessage}
      <MdCancel  className='text-red-500 text-md md:text-lg self end' onClick={()=>setPopup('hidden')}/>
</div>
  )
}

export default PopUp
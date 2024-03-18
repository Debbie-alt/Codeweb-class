import React from 'react'

const PopUp = ({movieName, PopUp, popupMessage}) => {
  return (
      <div className={`bg-red-500  w-3/4 md:w-1/2 ${PopUp} mx-auto rounded-lg top-0 p-5`}> 
      {popupMessage}</div>
  )
}

export default PopUp
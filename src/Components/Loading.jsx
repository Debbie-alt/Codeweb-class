import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {

    return () => {
    
    };
  }, []); 

  return (
    <div className='mx-auto flex flex-col mt-32 w-24 h-24'>
      {loading && (
        <>
          <figure className='flex py-2 space-x-2 animate-pulse'>
            <div className='bg-green-700 rounded-full  w-4 h-4'></div>
            <div className='bg-green-700 rounded-full  w-4 h-4'></div>
          </figure>
          <figure className='flex  space-x-2 animate-pulse '>
            <div className='bg-green-700 rounded-full w-4 h-4'></div>
            <div className='bg-green-700 rounded-full  w-4 h-4'></div>
          </figure>
        </>
      )}
    </div>
  );
};

export default Loading;

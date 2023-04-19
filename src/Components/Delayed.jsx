import React, { useState } from 'react'
import { useEffect } from 'react';

function Delayed({box}) {
    const [show,setShow]=useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      },1000);
    }, [])
    
  return (
    <div>
        {show && box}
        </div>
  )
}

export default Delayed
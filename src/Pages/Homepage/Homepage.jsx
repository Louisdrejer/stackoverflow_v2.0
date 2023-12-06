import React, { useEffect } from 'react'
import "./Homepage.css"
import SubmitBox from '../../Components/SubmitBox';

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className="maincontainer">
    <SubmitBox/>
  </div>
  )
}

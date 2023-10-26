import React from 'react'
import "./Homepage.css"

import LeftNav from '../../Components/LeftNav';
import SubmitBox from '../../Components/SubmitBox';

export default function Homepage() {
  return (
    <div className="maincontainer">
    <LeftNav/>
    <SubmitBox/>
  </div>
  )
}

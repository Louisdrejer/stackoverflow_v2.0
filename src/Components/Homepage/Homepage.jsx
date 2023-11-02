import React from 'react'
import "./Homepage.css"

import LeftNav from './LeftNav';
import SubmitBox from './SubmitBox';
export default function Homepage() {
  return (
    <div className="maincontainer">
      <LeftNav />
      <SubmitBox />
    </div>
  )
}
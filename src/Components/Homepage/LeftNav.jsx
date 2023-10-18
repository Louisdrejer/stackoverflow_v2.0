<<<<<<< HEAD
import React from 'react'
import "./Homepage.css"
export default function LeftNav() {
  return (
    <div className="Leftcontainer">
    <div className="logo_name_left">
      <div className="logo">logo</div>
      <div className="name">StackIT</div>
    </div>
    <hr style={{ width: "80%", border: "1.8px solid white", marginTop: "10px" }} />
    <div className="findAnswers">
      Find Answers
    </div>
    <hr style={{ width: "80%", border: "1px solid white", marginTop: "10px" }} />
    <div className="searchPage">
      Search Page
    </div>
    <div className="activity">
      Activity
    </div>
    <hr style={{ width: "80%", border: "1px solid white", marginTop: "10px" }} />
    <div className="questions_answers">
      Questions & Answers
    </div>
    <div className="profile">
      <div className="userLogo">
        <div className="smallUserLogo"></div>
      </div>
      <div className="profileName">
        ITUCPH
      </div>
      <div className="profileEmail">
        itucph@email.dk
      </div>
    </div>
  </div>
=======

import React from 'react'
import "./Homepage.css"
import logo from '../../img/Logo.png';
export default function LeftNav() {
  return (
    <div className="Leftcontainer">
      <div className="logo_name_left">
        <img src={logo} alt="Logo" style={{ maxWidth: "70%", marginLeft: "15%" }} />
      </div>
      <hr style={{ width: "80%", border: "1.8px solid white", marginTop: "10px" }} />
      <div className="findAnswers">
        Find Answers
      </div>
      <hr style={{ width: "80%", border: "1px solid white", marginTop: "10px" }} />
      <div className="searchPage">
        Search Page
      </div>
      <div className="activity">
        Activity
      </div>
      <hr style={{ width: "80%", border: "1px solid white", marginTop: "10px" }} />
      <div className="questions_answers">
        Questions & Answers
      </div>
      <div className="profile">
        <div className="userLogo">
          <div className="smallUserLogo"></div>
        </div>
        <div className="profileName">
          ITUCPH
        </div>
        <div className="profileEmailHomepage">
          itucph@email.dk
        </div>
      </div>
    </div>
>>>>>>> Louis_dev2
  )
}

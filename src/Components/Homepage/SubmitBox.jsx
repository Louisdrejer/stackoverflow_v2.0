
import React from 'react'
import "./Homepage.css"
export default function SubmitBox() {
  return (
    <div className="submitAQuestionContainer">
    <div className="submitAQuestionHeader">SUBMIT A QUESTION</div>
    <div className="inputQuestion">
      <div className="submitAQuestiontitle">Title</div>
      <input className='inputQuestionTitle' type="title" placeholder='The title' />
      <input className='inputPlaintext' type="title" placeholder='Write anything here...' />
      <div className="menubox">
        <div className="dropdown">
          <span>TOPIC</span>
          <div className="dropdown-content">
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
          </div>
          <div className="arrow-down"></div>
        </div>
        <div className="dropdown">
          <span>LANGUAGE</span>
          <div className="dropdown-content">
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
          </div>
          <div className="arrow-down"></div>
        </div>
        <div className="dropdown">
          <span>SKILL LEVEL</span>
          <div className="dropdown-content">
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
          </div>
          <div className="arrow-down"></div>
        </div>
        <button className='submitButton'>submit</button>
      </div>
    </div>
    <div className="newQustion">New Question</div>
    <div className="newQustionBox">
      <div className="newQustionHeader">
        <div className="Headline">Headline</div>
        <div className="userQ">
        <div className="smallUserLogo2"></div>
        <div className="username">Username</div>
        </div>
      </div>
      <div className="newQuestionBody">
        <div className="newQuestionBodyText">Body text</div>
      </div>
      <div className="newQuestionTags">
        <div className="NQtag">Tags</div>
        <div className="NQtag">Tags</div>
        <div className="NQtag">Tags</div>
      </div>

    </div>
    <div className="newQustionBox">
      <div className="newQustionHeader">
        <div className="Headline">Headline</div>
        <div className="userQ">
        <div className="smallUserLogo2"></div>
        <div className="username">Username</div>
        </div>
      </div>
      <div className="newQuestionBody">
        <div className="newQuestionBodyText">Body text</div>
      </div>
      <div className="newQuestionTags">
        <div className="NQtag">Tags</div>
        <div className="NQtag">Tags</div>
        <div className="NQtag">Tags</div>
      </div>

    </div>
    <div className="newQustionBox">
      <div className="newQustionHeader">
        <div className="Headline">Headline</div>
        <div className="userQ">
        <div className="smallUserLogo2"></div>
        <div className="username">Username</div>
        </div>
      </div>
      <div className="newQuestionBody">
        <div className="newQuestionBodyText">Body text</div>
      </div>
      <div className="newQuestionTags">
        <div className="NQtag">Tags</div>
        <div className="NQtag">Tags</div>
        <div className="NQtag">Tags</div>
      </div>

    </div>
 
  </div>
  )
}

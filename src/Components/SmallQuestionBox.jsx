import React from 'react'

export default function SmallQuestionBox(props) {
  return (
    <div className="newQustionBox">
        <div className="newQustionHeader">
        <div className="Headline">{props.title}</div>
        <div className="userQ">
            <div className="smallUserLogo2"></div>
            <div className="username">{props.name}</div>
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
  )
}

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
        {
          props.tags.map((tag) => (
              <div style={{backgroundColor: tag.color, color:"black"}} className="NQtag">{tag.name}</div>
          ))
        }
        </div>
    </div>
  )
}

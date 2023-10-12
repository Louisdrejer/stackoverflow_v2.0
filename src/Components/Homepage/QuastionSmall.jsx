import React from 'react'

export default function QuastionSmall(props) {
  return (
    <div className="newQustionBox">
        <div className="newQustionHeader">
            <div className="Headline">
                {props.headline}
            </div>
            <div className="userQ">
                <div className="smallUserLogo2"></div>
                <div className="username">{props.username}</div>
            </div>
        </div>
        <div className="newQuestionBody">
            <div className="newQuestionBodyText">{props.description}</div>
        </div>
        <div className="newQuestionTags">
            {props.tags.map(element => <li>{element}</li>)}
        </div>
        <QuastionSmall props = {headline = "test"} />
    </div>
  )
}

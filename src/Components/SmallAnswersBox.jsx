import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation } from 'react-router-dom';

export default function SmallAnswerBox(props) {
  const location = useLocation();

  
  return (
    <div className="newAnswerBox" style={{ background: "rgb(53, 54, 58)", borderColor: "rgb(53, 54, 58)" }}>
      <div className="newAnswerBox">
        <div className="userQ">
          <div className="smallUserLogo2"></div>
          <div className="username">{props.name}</div>
        </div>
      </div>
      <div className="newQuestionBody" style={{ background: "rgb(67, 68, 73)", border: "0px" }}>
      {location.pathname === '/Profile' ? (
    <SmallCodeBlock code={props.text} />
  ) : (
    <CodeBlock code={props.text} />
  )}
      </div>
      <div className="newAnwerTags">
        {props.tags.map((tag, index) => (
          <div key={index} style={{ backgroundColor: getColorForTag(tag), color: "black", border: "0px" }} className="NQtag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

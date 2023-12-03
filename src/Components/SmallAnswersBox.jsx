import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation, useNavigate } from 'react-router-dom';

export default function SmallAnswerBox(props) {
  const location = useLocation();

  return (
    <div className="aCommentBox" style={{ background: "rgb(53, 54, 58)", borderColor: "rgb(53, 54, 58)" }}>
      <div className="aCommentHeader">
        <div className="userQ">
          <div className="smallUserLogo2"></div>
          <div className="username">{props.name}</div>
        </div>
      </div>
      <div className="aCommentBody" style={{ background: "rgb(67, 68, 73)", border: "0px" }}>
      {location.pathname === '/Profile' ? (
    <SmallCodeBlock code={props.text} />
  ) : (
    <CodeBlock code={props.text} />
  )}
      </div>
    </div>
  );
}

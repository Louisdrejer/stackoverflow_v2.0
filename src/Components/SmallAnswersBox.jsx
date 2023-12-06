import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation, useNavigate } from 'react-router-dom';
import LikeDislikeButtons from './LikeDisLikeButton'


export default function SmallAnswerBox(props) {
  const location = useLocation();

  return (
    <div className="aCommentBox" style={{ background: "rgb(43, 44, 48)", borderColor: "rgb(43, 44, 48)" }}>
      <div className="aCommentHeader">
        <div className="userQ">
          <div className="smallUserLogo2"></div>
          <div className="username">{props.name}</div>
        </div>
          <div className="likesDislikes">
            <LikeDislikeButtons/>   
          </div>
      </div>
      <div className="aCommentBody" style={{ background: "rgb(67, 68, 73)" }}>
      {location.pathname === '/Profile' ? (
    <SmallCodeBlock code={props.text} />
  ) : (
    <CodeBlock code={props.text} />
  )}
      </div>
    </div>
  );
}
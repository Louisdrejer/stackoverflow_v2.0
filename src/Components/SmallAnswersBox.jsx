import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation, useNavigate } from 'react-router-dom';
import LikeDislikeButtons from './LikeDisLikeButton'


export default function SmallAnswerBox(props) {
  const navigate = useNavigate()
  const goToAnswerBoxProfile = () => {
    navigate(`../OtherProfile`, { state: { username: props.name, email: props.email} });
 
  };

  const location = useLocation();

  return (
    <div className="aCommentBox" style={{ background: "rgb(43, 44, 48)", borderColor: "rgb(43, 44, 48)" }}>

      <div className="aCommentHeader">
        <div className="userQ">
          <div className="smallUserLogo2"></div>
          <div className="userQ" onClick={goToAnswerBoxProfile}>{props.name}</div>
        </div>
      </div>




      <div className="aCommentBody" style={{ background: "rgb(67, 68, 73)" }}>
        {location.pathname === '/Profile' ?
          (<SmallCodeBlock code={props.text} />) :
          (<CodeBlock code={props.text} />)}
      </div>
      <div className="aCommentHeader">
        <div className="likesDislikes">
          <LikeDislikeButtons likes={props.likes} disLikes={props.disLikes} objectId={props.objectId} />
        </div>
        <div
           className="dateOfComment">{props.date.toLocaleDateString().replace(/\./g, "/")}
        </div>
      </div>

    </div>
  );
}

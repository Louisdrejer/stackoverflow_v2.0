import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation, useNavigate } from 'react-router-dom';
import CommentButton from "./CommentButton";

export default function SmallQuestionBox(props) {
  const location = useLocation();
  const getColorForTag = (tag) => {
    if (tag === "PYTHON" || tag === "JAVA" || tag === "JAVASCRIPT") {
      return "rgb(255, 219, 183)";
    } else if (tag === "BEGINNER" || tag === "INTERMEDIATE" || tag === "EXPERT") {
      return "rgb(254, 207, 228)";
    } else {
      return "rgb(154, 218, 112)";
    }
  };
  
  const navigate = useNavigate()
  const goToAnswerBoxPage = () => {
    navigate(`../Answers/`, { state: { username: props.name, title: props.title, text: props.text, tags: props.tags } });
 
  };


  return (
    <div className="newQustionBox" style={{ background: "rgb(53, 54, 58)", borderColor: "rgb(53, 54, 58)" }}>
      <div className="newQustionHeader">
        {/* <div className="Headline">{props.title}</div> */}
        <div className="Headline" onClick={goToAnswerBoxPage}>{props.title}</div>
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
      <div className="newQuestionTags">
        {props.tags.map((tag, index) => (
          <div key={index} style={{ backgroundColor: getColorForTag(tag), color: "black", border: "0px" }} className="NQtag">
            {tag}
          </div>
        ))}
          <div className="comment-button-container">
              <CommentButton/>
          </div>
      </div>
    </div>
  );
}

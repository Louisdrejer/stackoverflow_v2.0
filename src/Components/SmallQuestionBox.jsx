import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation } from 'react-router-dom';
import CommentButton from "./CommentButton";
import { deleteQuestionById } from '../Scripts/Database';

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
  const handleDeleteClick = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this question?");

    if (!isConfirmed) {
      return;
    }

    try {
   
      await deleteQuestionById(props.objectId);

      window.location.reload();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };
  
  return (
    <div className="newQustionBox" style={{ background: "rgb(53, 54, 58)", borderColor: "rgb(53, 54, 58)" }}>
      <div className="newQustionHeader">
        <div className="userQ">
        <div className="smallUserLogo2"></div>
        <div className="Headline">{props.title}</div>
        </div>
        {location.pathname === '/Profile' || '/profile' ? (
       <div className="DeleteContainer" onClick={handleDeleteClick}>
       Delete
     </div>
  ) : (
    <div className="username">{props.name}</div>
  )}
      </div>
      <div className="newQuestionBody">
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

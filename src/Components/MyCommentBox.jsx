import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation } from 'react-router-dom';
import LikeDislikeButtonNotclick from './LikeDisLikeButtonNotClick';
import { deleteCommitsById } from '../Scripts/Database';
import { RiDeleteBin2Line } from "react-icons/ri";

export default function MycommentBox(props) {
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
   
      await deleteCommitsById(props.objectId);
      props.setUpdate(props.update+1)
     // window.location.reload();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };
  
  return (
    <div className="newQustionBox" style={{ background: "rgb(53, 54, 58)", borderColor: "rgb(53, 54, 58)", width: "90%", marginLeft: "5%" }}>
      <div className="newQustionHeader">
        <div className="userQ">
          <div className="smallUserLogo2"></div>
          <div className="Headline">{props.title}</div>
        </div>
        {location.pathname === '/OtherProfile' ? (
         <div></div>
        ) : (

          <div className="DeleteContainer" onClick={handleDeleteClick}>
            <RiDeleteBin2Line />
          </div>
        )}
      </div>
      <div className="newQuestionBody">
        {location.pathname === '/Profile' || location.pathname === '/profile' || location.pathname === '/OtherProfile' ? (
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
        <div className="likeDislike-button-notCLick-container ">
          <LikeDislikeButtonNotclick likes={props.likes} dislikes={props.dislikes} />
        </div>
      </div>
    </div>
  );
        }
import React from 'react';
import CodeBlock from './CodeBlock'; 
import SmallCodeBlock from './SmallCodeBlock'
import './CodeBlock.css'; 
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Flag from './Flag';
import LikeDislikeButton from './LikeDisLikeButton'


import { deleteCommitsById } from '../Scripts/Database';
import { RiDeleteBin2Line } from "react-icons/ri";

export default function MycommentBox(props) {
  const navigate = useNavigate()
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

  console.log(props.dislikes)



  const goToAnswerBoxPage = () => {
    navigate(`../Answers/`, { state: { pid: props.objectId, username: props.name, title: props.title, text: props.text, tags: props.tags } });
 
  };
  
  return (
    <div className="newQustionBox" style={{ background: "rgb(53, 54, 58)", borderColor: "rgb(53, 54, 58)", width: "90%", marginLeft: "5%" }}>
      <div className="newQustionHeader">
        <div className="userQ">
          <div className="smallUserLogo2"></div>
          <div className="Headline" onClick={goToAnswerBoxPage}>{props.title}</div>
        </div>

        <Flag />

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
          <LikeDislikeButton likes={props.likes} disLikes={props.dislikes} />
        </div>
      </div>
    </div>
  );
        }
import React, {useState} from 'react';
import CommentButton from './CommentButton';


export default function SmallQuestionBox(props) {


    return (
        <div className="newQustionBox" style={{background: "rgb(53, 54, 58)", borderColor: "rgb(53, 54, 58)"}}>
            <div className="newQustionHeader">
                <div className="Headline">{props.title}</div>
                <div className="userQ">
                    <div className="smallUserLogo2"></div>
                    <div className="username">{props.name}</div>
                </div>
            </div>
            <div className="newQuestionBody" style={{background: "rgb(67, 68, 73)", border: "0px"}}>
                <div className="newQuestionBodyText">Body text</div>
            </div>
            <div className="newQuestionTags">
                {
                    props.tags.map((tag) => (
                        <div style={{backgroundColor: tag.color, color: "black", border: "0px"}}
                             className="NQtag">{tag.name}</div>
                    ))
                }
                <div className="comment-button-container">
                    <CommentButton/>
                </div>
            </div>

        </div>
    )
}

import arrow from '../img/arrow.svg';
import React, { useState, useEffect } from 'react'
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import SmallQuestionBox from './SmallQuestionBox';
import SmallAnswerBox from './SmallAnswersBox';
import { postComment, getComments } from '../Scripts/Database';


export default function CommentPage() {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const questionState = location.state;
  const { name, title, text, tags } = questionState;


  const handlePostComment = async () => {
    try {
      const result = await postComment({
        author: 'Louis', 
        text: description,
      });
      setDescription('');
    } catch (error) {
      console.error('Error posting or fetching comment:', error);
    }
  }; 

return (
  <div className="Answerpage commentContainer"> 
    <div className="headerWithBackButton">
      <button className="back-button" onClick={() => window.history.back()}>
        <img src={arrow} alt="Back" />
      </button>
      <span className="recentQuestionsLabel">Questions</span>
    </div>
    <div className='QuestionDescriptionContainer'>      
      <SmallQuestionBox name={name} title={title} text={text} tags={tags} />
    </div>
    
    <div className="previousAnswerContainer">
      <div className="previousAnswerHeader">PREVIOUS ANSWERS</div>
      <div className='commentsContainer'>      
        <SmallAnswerBox name={name} title={title} text={text} tags={tags} />
      </div>
    </div>


    <div className="submitCommentContainer">
      <div className="submitCommentHeader">YOUR ANSWER</div>
      <div className="inputComment">
      <div style={{ marginTop: '10px' }}></div>
        <textarea
          className="inputPlaintextAnswer"
          type="text" 
          placeholder="Write anything here... remember to be helpful and friendly :)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div style={{ marginTop: '6px' }}></div>
        <button className="submitAnswerButton" onClick={handlePostComment}>
          Submit
        </button>
      </div>
    </div>
  </div>
);
}
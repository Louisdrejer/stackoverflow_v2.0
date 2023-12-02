import arrow from '../img/arrow.svg';
import React, { useState, useEffect } from 'react'
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import SmallQuestionBox from './SmallQuestionBox';
import { postComment, getComments, getQuestionByID } from '../Scripts/Database';


export default function CommentPage() {
  // const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [questions, setQuestions] = useState([]);
  // const { objectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const questionState = location.state;

  const { name, title, text, tags } = questionState;

  // useEffect(() => {
  //   const fetchQuestion = async () => {
  //     if (objectId) {
  //       try {
  //         const question = await getQuestionByID(objectId);
  //         setQuestions([question]); 
  //       } catch (error) {
  //         console.error('Error fetching question:', error);
  //       }
  //     }
  //   };
  
  //   fetchQuestion();
  // }, [objectId]);


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
  <div className="commentContainer"> 
    <div className="headerWithBackButton">
      <button className="back-button" onClick={() => window.history.back()}>
        <img src={arrow} alt="Back" />
      </button>
      <span className="recentQuestionsLabel"> Questions</span>
    </div>
    <div className='QuestionDescriptionContainer'>      
      <SmallQuestionBox name={name} title={title} text={text} tags={tags} />
    </div>
    
    
    

    {/* <div className="PreviousComments">
      <div className="commentDescription">
          {questions.slice(startIndex, endIndex).map((question, index) => (
            <SmallCommentBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} />
          ))}
      </div>
    </div> */}


    <div className="submitCommentContainer">
      <div className="submitCommentHeader">YOUR ANSWER</div>
      <div className="inputComment">
      <div style={{ marginTop: '10px' }}></div>
        <textarea
          className="inputPlaintextAnswer"
          type="text" 
          placeholder="Write anything here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div style={{ marginTop: '10px' }}></div>
        <button className="submitAnswerButton" onClick={handlePostComment}>
          Submit
        </button>
      </div>
    </div>
  </div>
);
}
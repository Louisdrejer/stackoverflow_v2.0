import arrow from '../img/arrow.svg';
import React, { useState, useEffect } from 'react'
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import SmallQuestionBox from './SmallQuestionBox';
import SmallAnswerBox from './SmallAnswersBox';
import { postComment, getCommentsById } from '../Scripts/Database';


export default function CommentPage() {

  const [description, setDescription] = useState('');
  const [Comments, setComments] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const questionState = location.state;
  // if (!questionState) {
  //   console.log('No state provided, redirecting to questions list.');
  //   navigate('/questions');
  //   return null;
  // }
  const { username, title, text, tags, qid } = questionState
  console.log(questionState);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const questionId = qid;
        const comments = await getCommentsById('gcDQ2O9as9');
        console.log(comments);
        setComments(comments); 
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    fetchData();
  }, [qid]); 

  
  const handlePostComment = async () => {
    try {
      const result = await postComment({
        author: 'Louis', 
        text: description,
        // responseId: responseId
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
      <SmallQuestionBox name={username} title={title} text={text} tags={tags} />
    </div>
    

    <div className="previousAnswerContainer">
      <div className="previousAnswerHeader">PREVIOUS ANSWERS</div>
      <div className='commentsContainer'>   
        {/* <SmallAnswerBox name={comment.Author} text={comment.Text} /> */}
        {Comments.map((comment, index) => (
          <SmallAnswerBox 
            key={index}
            name={comment.Author}
            text={comment.Text}
          />
        ))}
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
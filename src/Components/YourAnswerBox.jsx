import arrow from '../../img/arrow.svg';
import React from 'react'
import {Link} from 'react-router-dom';
import SmallQuestionBox from './SmallQuestionBox';
import { postComment, getComments } from '../Scripts/Database';


export default function AnswerPage() {

  const handlePostAnswer = async () => {
    try {
      const result = await postAnswer({
        author: 'Louis', 
        text: description,
      });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error posting or fetching answer:', error);
    }
  }; 

return (
  <div className="AnswerContainer">
    <div className='QuestionDescriptionContainer'>
      <div className="headerWithBackButton">
        <button className="back-button1" onClick={() => window.history.back()}>
          <img src={arrow} alt="Back" />
        </button>
        <span className="recentQuestionsLabel">RECENT QUESTIONS</span>
      </div>

      <div className="QustionDescription"></div>
        {questions.slice(startIndex, endIndex).map((question, index) => (
          <SmallQuestionBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} />
        ))}
    </div>

    <div className="PreviousComments">
      <div className="AnswerDescription">
          {questions.slice(startIndex, endIndex).map((question, index) => (
            <SmallAnswerBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} />
          ))}
      </div>


    </div>


    <div className="submitAnswerContainer">
      <div className="submitAnswerHeader">YOUR ANSWER</div>
      <div className="inputAnswer">
        <textarea
          className="inputPlaintext"
          type="text" 
          placeholder="Write anything here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="SubmitBox">
          <div style={{ marginTop: '5px' }}></div>
          <button className="submitButton" onClick={handlePostAnswer}>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
);
}
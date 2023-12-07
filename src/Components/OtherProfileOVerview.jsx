
import React, { useState, useEffect } from 'react';
import { getNumberOfQuestionsByAuthor, getNumberOfCommentsByAuthor } from '../Scripts/Database';
import {useLocation,} from 'react-router-dom';

export default function OtherProfileOVerview({ onComponentChange }) {
  const [clickedLine, setClickedLine] = useState('Questions');
  const location = useLocation();
  const questionState = location.state;
  console.log(questionState)
  const { username} = questionState
  console.log(questionState)

  const getNumberOfPL = () => {
    return 0;
  };

  useEffect(() => {
    const fetchData = async () => {

    };

    fetchData();
  }, []);

  const handleClick = (line) => {
    setClickedLine(line === clickedLine ? 'Questions' : line);
    onComponentChange(line);
  };


  return (
    <div className="profileOverviewBox">
      <div className="profileOverviewProfile">
        <div className="profileOverviewUserLogo">
          {/* <div className="profileOverviewSmallUserLogo">
            <div className="PL_NewMessages">+{numberOfNewMessages}</div>
          </div> */}

        </div>

        <div className="profileOverviewProfileName">
          {username}
        </div>
        <div className="profileOverviewProfileEmail">
          {/*email*/}
        </div>
      </div>

      <div className="profileOverviewInfo">
        <hr style={{ width: "110%", border: "1px solid white", marginLeft: "-12px", marginTop: "150px", marginBottom: "-130px" }} />
        <div
          className={`profileOverviewQuestionLine ${clickedLine === 'Questions' ? 'clicked' : ''}`}
          onClick={() => handleClick('Questions')}
        >
          <div className="PO_Question">My Questions</div>
          <div className="PO_QuestionNumber">
            {/* {numberOfQuestions} */}
          </div>
        </div>
        <div

          className={`profileOverviewAnswersLine ${clickedLine === 'Answers' ? 'clicked' : ''}`}
          onClick={() => handleClick('Answers')}
        >
          <div className="PO_Answers">My Answers</div>
          <div className="PO_AnswersNumber">{/* {numberOfAnswers} */}</div>
        </div>
        <div
          className={`profileOverviewPLLine ${clickedLine === 'ProgrammingLanguages' ? 'clicked' : ''}`}
          onClick={() => handleClick('ProgrammingLanguages')}
        >
          <div className="PO_PL">Programming Languages</div>
          <div className="PO_PLNumber">{/* {numberOfPL} */}</div>
        </div>

      </div>

    </div>

  );
}

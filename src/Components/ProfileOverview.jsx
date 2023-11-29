import React, { useState, useEffect } from 'react';
import ProfilePLProgrammingLanguages from './ProfilePL_ProgrammingLanguages';
import ProfilePLAnswers from './ProfilePL_Answers';
import ProfilePLQuestions from './ProfilePL_Questions';
import ProfilePLNewMessages from './ProfilePL_NewMessages';

export default function ProfileOverview({ onComponentChange }) {
  const getNumberOfQuestions = () => {

  };
  const user={
  "username": "Louis",
  "email": "louisdrejer@hotmail.com",
  "password": "louis1234"
  }
  const getNumberOfAnswers = async () => {
    let totalAnswers = 0;
    return totalAnswers;
  };

  const getNumberOfPL = () => {
   
    return 0;
  };

  const [numberOfAnswers, setNumberOfAnswers] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [numberOfPL, setNumberOfPL] = useState(0);
  const [numberOfNewMessages, setNumberOfNewMessages] = useState(0);
  const [clickedLine, setClickedLine] = useState('Questions'); // 'Questions' is set as default

  useEffect(() => {
    const fetchData = async () => {
      const answers = await getNumberOfAnswers();
      const questions = getNumberOfQuestions(); // No need for async here
      setNumberOfAnswers(answers);
      setNumberOfNewMessages(answers);
      setNumberOfQuestions("0");
    };

    fetchData();
  }, []);

  useEffect(() => {
    // No need for async in this case, as getNumberOfPL is synchronous
    const PL = getNumberOfPL();
    setNumberOfPL(PL);
  }, []); // Trigger the effect when programmingLanguages changes

  const handleClick = (line) => {
    setClickedLine(line === clickedLine ? 'Questions' : line);
    onComponentChange(line);
  };


  return (
    <div className="profileOverviewBox">
      <div className="profileOverviewProfile">
        <div className="profileOverviewUserLogo">
          <div className="profileOverviewSmallUserLogo">
            <div className="PL_NewMessages">+{numberOfNewMessages}</div>
          </div>
          
        </div>
        
        <div className="profileOverviewProfileName">
          {user.username}
        </div>
        <div className="profileOverviewProfileEmail">
          {user.email}
        </div>
      </div>
    
      <div className="profileOverviewInfo">
      <hr style={{ width: "129%", border: "1px solid white", marginLeft: "-30px" , marginTop:"150px", marginBottom:"-130px"}} />
        <div
          className={`profileOverviewQuestionLine ${clickedLine === 'Questions' ? 'clicked' : ''}`}
          onClick={() => handleClick('Questions')}
        >
          <div className="PO_Question">Question</div>
          <div className="PO_QuestionNumber">{numberOfQuestions}</div>
        </div>
        <div
          className={`profileOverviewAnswersLine ${clickedLine === 'Answers' ? 'clicked' : ''}`}
          onClick={() => handleClick('Answers')}
        >
          <div className="PO_Answers">Answers</div>
          <div className="PO_AnswersNumber">{numberOfAnswers}</div>
        </div>
        <div
          className={`profileOverviewPLLine ${clickedLine === 'ProgrammingLanguages' ? 'clicked' : ''}`}
          onClick={() => handleClick('ProgrammingLanguages')}
        >
          <div className="PO_PL">Programming Languages</div>
          <div className="PO_PLNumber">{numberOfPL}</div>
        </div>
        <div
          className={`profileOverviewNewMessagesLine ${clickedLine === 'NewMessages' ? 'clicked' : ''}`}
          onClick={() => handleClick('NewMessages')}
        >
          <div className="PO_NewMes">New messages</div>
          <div className="PO_NewMesNumber">{numberOfNewMessages}</div>
        </div>
        
      </div>
      
    </div>
    
  );
}

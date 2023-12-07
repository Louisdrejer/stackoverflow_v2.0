import React, { useState, useEffect } from 'react';
import { getNumberOfQuestionsByAuthor, getNumberOfCommentsByAuthor } from '../Scripts/Database';

export default function ProfileOverview({ onComponentChange }) {
  const [numberOfAnswers, setNumberOfAnswers] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [numberOfPL, setNumberOfPL] = useState(0);
  const [numberOfNewMessages, setNumberOfNewMessages] = useState(0);
  const [clickedLine, setClickedLine] = useState('Questions');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');

  const getNumberOfQuestions = async () => {
    return await getNumberOfQuestionsByAuthor(username);
  };

  const getNumberOfAnswers = async () => {
    let totalAnswers = 0;
    return totalAnswers;
  };

  const getNumberOfPL = () => {
    return 0;
  };

  useEffect(() => {
    const fetchData = async () => {
      const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
      const currentUser = JSON.parse(currentUserString);
      const username1 = currentUser.username;
      const email1 = currentUser.email;
      const questions = await getNumberOfQuestionsByAuthor(username1);
      const answers = await getNumberOfCommentsByAuthor(username1);
      setemail(email1);
      setusername(username1);
      setNumberOfAnswers(answers);
      setNumberOfNewMessages(answers);
      setNumberOfQuestions(questions);
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
          {username}
        </div>
        <div className="profileOverviewProfileEmail">
          {email}
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

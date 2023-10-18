import React, { useState, useEffect } from 'react';
import './Profile.css';

export default function ProfileOverview({ user }) {
  const getNumberOfQuestions = () => {
    if (user && user.Question) {
      return user.Question.length;
    }
    return 0;
  };

  const getNumberOfAnswers = async () => {
    let totalAnswers = 0;
    if (user && user.Question) {
      for (let i = 0; i < user.Question.length; i++) {
        totalAnswers += user.Question[i]?.Answers || 0;
      }
    }
    return totalAnswers;
  };

  const getNumberOfPL = () => {
    if (user && user.programmingLanguages) {
      return user.programmingLanguages.length;
    }
    return 0;
  };

  const [numberOfAnswers, setNumberOfAnswers] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [numberOfPL, setNumberOfPL] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const answers = await getNumberOfAnswers();
      const questions = getNumberOfQuestions(); // No need for async here
      setNumberOfAnswers(answers);
      setNumberOfQuestions(questions);
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    // No need for async in this case, as getNumberOfPL is synchronous
    const PL = getNumberOfPL();
    setNumberOfPL(PL);
  }, [user.programmingLanguages]); // Trigger the effect when programmingLanguages changes

  return (
    <div className="profileOverviewBox">
      <div className="profileOverviewProfile">
        <div className="profileOverviewUserLogo">
          <div className="profileOverviewSmallUserLogo"></div>
        </div>
        <div className="profileOverviewProfileName">{user.username}</div>
        <div className="profileOverviewProfileEmail">{user.email}</div>
      </div>
      <div className="profileOverviewInfo">
        <div className="profileOverviewQuestionLine">
          <div className="PO_Question">Question</div>
          <div className="PO_QuestionNumber">{numberOfQuestions}</div>
        </div>
        <div className="profileOverviewAnswersLine">
          <div className="PO_Answers">Answers</div>
          <div className="PO_AnswersNumber">{numberOfAnswers}</div>
        </div>
        <div className="profileOverviewPLLine">
          <div className="PO_PL">Programming Languages</div>
          <div className="PO_PLNumber">{numberOfPL}</div>
        </div>
      </div>
    </div>
  );
}

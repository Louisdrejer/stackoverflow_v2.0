import React, { useState, useEffect } from 'react';
import { getQuestionsByAuthor } from '../Scripts/Database';
import SmallQuestionBox from './SmallQuestionBox';
import {useLocation,} from 'react-router-dom';

export default function OtherProfilePL_Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [Update, setUpdate] = useState(1)
  const itemsPerPage = 5;
  const location = useLocation();
  const questionState = location.state;
  const { username} = questionState

  useEffect(() => {
    const fetchData = async () => {
      try {

        const result = await getQuestionsByAuthor(username);
        setQuestions(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, [Update]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0);
  };


  return (
    <div className="myAnswersContainer">
    <div className="myAnswersHeaderText">THEIR QUESTIONS</div>
      {questions.slice(startIndex, endIndex).map((question, index) => (
        <SmallQuestionBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} objectId={question.objectId} setUpdate ={setUpdate} update ={Update}/>
      ))}
      {questions.length >= itemsPerPage && (
        <div className="pagination">
          {currentPage !== 1 && (
            <button
              style={{
                background: 'rgb(67, 68, 73)',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => {
                prevPage();
              }}
              disabled={currentPage === 1}
            >
              previous
            </button>
          )}

          <div className={`currentPage ${questions.length < itemsPerPage ? 'hidden' : ''}`}>
            {currentPage}
          </div>

          {endIndex < questions.length && (
            <button
              style={{
                background: 'rgb(67, 68, 73)',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => {
                nextPage();
              }}
              disabled={endIndex >= questions.length}
            >
              next
            </button>
          )}

        </div>
      )}
    </div>
  );
}

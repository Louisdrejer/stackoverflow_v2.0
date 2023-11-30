import React, { useState, useEffect } from 'react';
import { getQuestionsByAuthor } from '../Scripts/Database';
import SmallQuestionBox from './SmallQuestionBox';


export default function ProfilePL_Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
        const currentUser = JSON.parse(currentUserString);
        const username = currentUser.username;
        const result = await getQuestionsByAuthor(username);
        setQuestions(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  return (
    <div className="myAnswersContainer">
    <div className="myAnswersHeaderText">MY QUESTIONS</div>
      {questions.slice(startIndex, endIndex).map((question, index) => (
        <SmallQuestionBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} />
      ))}
      {/* Pagination for Questions */}
      {questions.length >= itemsPerPage && (
        <div className="pagination">
          <button
            onClick={() => {
              prevPage();
              // Handle any additional logic you need when navigating to the previous page
            }}
            disabled={currentPage === 1}
          >
            previous
          </button>
          <div className="currentPage">{currentPage}</div>
          <button
            onClick={() => {
              nextPage();
              // Handle any additional logic you need when navigating to the next page
            }}
            disabled={endIndex >= questions.length}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
}

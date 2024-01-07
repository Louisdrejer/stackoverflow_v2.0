import React, { useState, useEffect } from 'react';
import SmallQuestionBox from './SmallQuestionBox';
import { postQuestion, getNewestQuestions } from '../Scripts/Database';
import DropdownMenues from './DropdownMenues';
import CodeBlock from './CodeBlock';
import CodeInput from './CodeInput';
import { FaArrowRight } from 'react-icons/fa';
import LikeDislikeButtons from './LikeDisLikeButton';

export default function SubmitBox() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('TOPIC');
  const [selectedLanguage, setSelectedLanguage] = useState('LANGUAGE');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('SKILL LEVEL');
  const [currentPage, setCurrentPage] = useState(1);
  const [resetDropdown, setResetDropdown] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewestQuestions();
        setQuestions(result);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleSkillLevelChange = (skillLevel) => {
    setSelectedSkillLevel(skillLevel);
  };



  const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
  const currentUser = JSON.parse(currentUserString);
  const currentUsername = currentUser.username;
  
  const handlePostQuestion = async () => {
    try {
      if(selectedTopic!== 'TOPIC'|| selectedLanguage !=='LANGUAGE' || selectedSkillLevel !== 'SKILL LEVEL'){
      const result = await postQuestion({
        title,
        author: currentUsername,
        text: description,
        tags: [selectedTopic, selectedLanguage, selectedSkillLevel],
      });
      setTitle('');
      setDescription('');
      setSelectedTopic('TOPIC')
      setSelectedLanguage('LANGUAGE')
      setSelectedSkillLevel('SKILL LEVEL')
      setResetDropdown(resetDropdown + 1);
      const updatedQuestions = await getNewestQuestions();
      setQuestions(updatedQuestions);
    }
    } catch (error) {
      console.error('Error posting or fetching questions:', error);
    }
  };

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
    <div className="submitAQuestionContainer">
      <div className="submitAQuestionHeader">SUBMIT A QUESTION</div>
      <div className="inputQuestion">
        <div className="submitAQuestiontitle">Headline</div>
        <input
          className="inputQuestionTitle"
          type="text"
          placeholder="The title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="inputPlaintext"
          type="text"
          placeholder="Write anything here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="menubox">
          <div style={{ marginTop: '5px' }}>
            <DropdownMenues
              onTopicChange={handleTopicChange}
              onLanguageChange={handleLanguageChange}
              onSkillLevelChange={handleSkillLevelChange}
              resetDropdown={resetDropdown} 
            />

          </div>
          <button className="submitButton" onClick={handlePostQuestion}>
            Submit
          </button>
        </div>
      </div>
      <div className="newQustion">RECENT QUESTIONS</div>

      {questions.slice(startIndex, endIndex).map((question, index) => (
        <SmallQuestionBox
          key={index}
          activeUser={currentUsername}
          email={question.email}
          name={question.Author}
          title={question.Title}
          text={question.Text}
          tags={question.Tags}
          objectId={question.objectId}
        />
      ))}
      {/* Pagination for Questions */}
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
              Previous
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
              Next
            </button>
          )}

        </div>
      )}
    </div>
  );
}

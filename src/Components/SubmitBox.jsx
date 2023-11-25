// SubmitBox.js
import React, { useState, useEffect } from 'react';
import SmallQuestionBox from './SmallQuestionBox';
import { postQuestion, getNewestQuestions } from '../Scripts/Database';
import DropdownMenues from './DropdownMenues';

export default function SubmitBox() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust this based on your requirement

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewestQuestions();
        setQuestions(result);
        console.log(result);
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

  const handlePostQuestion = async () => {
    try {
      const result = await postQuestion({
        title,
        author: 'Louis', 
        text: description,
        tags: [selectedTopic, selectedLanguage, selectedSkillLevel],
      });
      setTitle('');
      setDescription('');
      const updatedQuestions = await getNewestQuestions();
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error posting or fetching questions:', error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
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
        <input
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
            />
          </div>
          <button className="submitButton" onClick={handlePostQuestion}>
            Submit
          </button>
        </div>
      </div>
      <div className="newQustion">RECENT QUESTION</div>
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

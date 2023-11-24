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
      {questions.slice(0, 5).map((question, index) => (
        <SmallQuestionBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} />
      ))}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import { getQuestionsByTags } from '../../Scripts/Database';
import { useLocation } from 'react-router-dom';
import TopicDropDown from '../../Components/TopicDropDown';
import LanguageDropDown from '../../Components/LanguageDropDown';
import SkillLeveDropDown from '../../Components/SkillLeveDropDown';
import { GrPowerReset } from 'react-icons/gr';
import SmallQuestionBox from '../../Components/SmallQuestionBox';


export default function SearchPage() {
  const defaultTopic = 'TOPIC';
  const defaultLanguage = 'LANGUAGE';
  const defaultSkillLevel = 'SKILL LEVEL';
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTermFromQuery = queryParams.get('term');
  const [searchTerm, setSearchTerm] = useState(searchTermFromQuery || '');
  const searchWordsArray = searchTerm.trim().split(/\s+/).filter((word) => word !== '');
  const [searchTerm2, setsearchTerm2] = useState(searchWordsArray);
  const [selectedTopic, setSelectedTopic] = useState(defaultTopic);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState(defaultSkillLevel);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    searchQuestions();
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    searchQuestions();
  };

  const handleSkillLevelChange = (skillLevel) => {
    setSelectedSkillLevel(skillLevel);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const wordsArray = searchTerm.trim().split(/\s+/).filter((word) => word !== '');
      setsearchTerm2(wordsArray);
    }
    if ((e.key === 'Backspace' || e.key === 'Delete') && searchTerm.length === 1) {
      setsearchTerm2([]);
      setSearchTerm('');
    }
  };

  const searchQuestions = async () => {
    try {
      const nonEmptyTags = [...searchTerm2, selectedTopic, selectedLanguage, selectedSkillLevel];

      const results = await getQuestionsByTags(nonEmptyTags);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching questions:', error);
    }
  };

  const handleReset = async () => {

  };
  

  useEffect(() => {
    const queryFetch = async () => {
      try {
        await Promise.all([
          setSelectedTopic(selectedTopic),
          setSelectedLanguage(selectedLanguage),
          setSelectedSkillLevel(selectedSkillLevel),
        ]);
        searchQuestions();
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    queryFetch(); // Call the function here
  }, [selectedTopic, selectedLanguage, selectedSkillLevel, searchTermFromQuery, searchTerm2]);

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
    <div className="profileBackground">
      <div className="profileBackground2">
        <div className="SearchHeader">DISCOVER ANSWERS</div>
        <div className="SearchPageDropDown">
          <div className="filterText">FILTER TAGS</div>
          <TopicDropDown onTopicChange={handleTopicChange} defaultTopic={defaultTopic} />
          <LanguageDropDown onLanguageChange={handleLanguageChange} defaultLanguage={defaultLanguage}/>
          <SkillLeveDropDown
            onSkillLevelChange={handleSkillLevelChange}
            defaultSkillLevel={defaultSkillLevel}
          />{/** 
          <GrPowerReset
            style={{ color: 'white', marginBottom: '-2px', cursor: 'pointer' }}
            onClick={handleReset}
          />*/}
        </div>
        <input
          type="text"
          className="SPSearch"
          placeholder="Search tags"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
        />
        <div className="searchResultsbox">
          <div className="searchResults">SEARCH RESULTS</div>
          {searchResults.slice(startIndex, endIndex).map((question, index) => (
            <SmallQuestionBox
              key={index}
              name={question.Author}
              title={question.Title}
              text={question.Text}
              tags={question.Tags}
              objectId={question.objectId}
            />
          ))}
          {searchResults.length >= itemsPerPage && (
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

              <div className={`currentPage ${searchResults.length < itemsPerPage ? 'hidden' : ''}`}>
                {currentPage}
              </div>

              {endIndex < searchResults.length && (
                <button
                  style={{
                    background: 'rgb(67, 68, 73)',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    nextPage();
                  }}
                  disabled={endIndex >= searchResults.length}
                >
                  next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

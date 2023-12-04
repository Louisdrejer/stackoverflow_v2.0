import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import DropdownMenues from '../../Components/DropdownMenues';
import SmallQuestionBox from '../../Components/SmallQuestionBox';
import { getQuestionsByTags } from '../../Scripts/Database';

import { useLocation } from 'react-router-dom';
import TopicDropDown from '../../Components/TopicDropDown';
import LanguageDropDown from '../../Components/LanguageDropDown';
import SkillLeveDropDown from '../../Components/SkillLeveDropDown';

export default function SearchPage() {
  const defaultTopic = 'TOPIC';
  const defaultLanguage = 'LANGUAGE';
  const defaultSkillLevel = 'SKILL LEVEL';
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTermFromQuery = queryParams.get('term');
  const [searchTerm, setSearchTerm] = useState(searchTermFromQuery || '');
  const searchWordsArray = searchTerm.trim().split(/\s+/).filter(word => word !== '');
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
      const wordsArray = searchTerm.trim().split(/\s+/).filter(word => word !== '');
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
    console.log(selectedLanguage)
  
    queryFetch(); // Call the function here
  }, [selectedTopic, selectedLanguage, selectedSkillLevel, searchTermFromQuery, searchTerm2]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  return (
    <div className="profileBackground">
      <div className="profileBackground2">
        <div className="SearchHeader">DISCOVER ANSWERS</div>
        <div className="SearchPageDropDown">
          <div className="filterText">FILTER TAGS</div>
          <TopicDropDown onTopicChange={handleTopicChange}/>
          <LanguageDropDown    onLanguageChange={handleLanguageChange} />
          <SkillLeveDropDown  onSkillLevelChange={handleSkillLevelChange} />
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
            <SmallQuestionBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} />
          ))}
          {/* Pagination for Questions */}
          {searchResults.length >= itemsPerPage && (
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
                disabled={endIndex >= searchResults.length}
              >
                next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

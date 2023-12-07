
    // DropdownMenues.js
    import React, { useState, useEffect } from 'react';
    import '../Pages/SearchPage/SearchPage';
    
    export default function DropdownMenues({
      onTopicChange,
      onLanguageChange,
      onSkillLevelChange,
      resetDropdown,
    }) {
      const defaultTopic = 'TOPIC';
      const defaultLanguage = 'LANGUAGE';
      const defaultSkillLevel = 'SKILL LEVEL';
      
      const [selectedTopic, setSelectedTopic] = useState(defaultTopic);
      const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
      const [selectedSkillLevel, setSelectedSkillLevel] = useState(defaultSkillLevel);
      const [SearchTerm, setSearchTerm] = useState('');
      
    
      const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
        onTopicChange(selectedTopic);
      };
    
      const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        onLanguageChange(selectedLanguage);
      };
      
      const handleSkillLevelChange = (skillLevel) => {
        setSelectedSkillLevel(skillLevel);
        onSkillLevelChange(selectedSkillLevel);
      };
    
      useEffect(() => {
        if (resetDropdown) {
          // Reset dropdown values when resetDropdown changes
          setSelectedTopic(defaultTopic);
          setSelectedLanguage(defaultLanguage);
          setSelectedSkillLevel(defaultSkillLevel);
        }
      }, [resetDropdown]);
    
      useEffect(() => {
        if (
          selectedSkillLevel !== defaultSkillLevel &&
          selectedLanguage !== defaultLanguage &&
          selectedTopic !== defaultTopic
        ) {
          onTopicChange(selectedTopic);
          onLanguageChange(selectedLanguage);
          onSkillLevelChange(selectedSkillLevel);
        }
      }, [selectedLanguage, selectedSkillLevel, selectedTopic]);
    
      const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log(SearchTerm);
        }
      };
    

    return (
        <>
        <div className="SP1dropdown">
            <span>{selectedTopic}</span>
            <div className="SP1dropdown-content">
            <p onClick={() => handleTopicChange('DATA TYPES')} style={{ cursor: 'pointer' }}>
                DATA TYPES
            </p>
            <p onClick={() => handleTopicChange('LISTS')} style={{ cursor: 'pointer' }}>
                LISTS
            </p>
            <p onClick={() => handleTopicChange('BACKEND')} style={{ cursor: 'pointer' }}>
                BACKEND
            </p>
            </div>
            <div className="SP1arrow-down"></div>
        </div>
        <div className="SP2dropdown">
            <span>{selectedLanguage}</span>
            <div className="SP2dropdown-content">
            <p onClick={() => handleLanguageChange('PYTHON')} style={{ cursor: 'pointer' }}>
                PYTHON
            </p>
            <p onClick={() => handleLanguageChange('JAVA')} style={{ cursor: 'pointer' }}>
                JAVA
            </p>
            <p onClick={() => handleLanguageChange('JAVASCRIPT')} style={{ cursor: 'pointer' }}>
                JAVASCRIPT
            </p>
            </div>
            <div className="SP2arrow-down"></div>
        </div>
        <div className="SP3dropdown">
            <span>{selectedSkillLevel}</span>
            <div className="SP3dropdown-content">
            <p onClick={() => handleSkillLevelChange('BEGINNER')} style={{ cursor: 'pointer' }}>
                BEGINNER
            </p>
            <p onClick={() => handleSkillLevelChange('INTERMEDIATE')} style={{ cursor: 'pointer' }}>
                INTERMEDIATE
            </p>
            <p onClick={() => handleSkillLevelChange('EXPERT')} style={{ cursor: 'pointer' }}>
                EXPERT
                
            </p>
            </div>
            <div className="SP3arrow-down"></div>
        </div>
        </>
    );
    }
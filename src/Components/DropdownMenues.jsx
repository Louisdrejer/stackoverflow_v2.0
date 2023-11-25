
    // DropdownMenues.js
    import React, { useState, useEffect } from 'react';
    import '../Pages/SearchPage/SearchPage';

    export default function DropdownMenues({ onTopicChange, onLanguageChange, onSkillLevelChange }) {
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
        if (selectedSkillLevel !== defaultSkillLevel && selectedLanguage !== defaultLanguage && selectedTopic !== defaultTopic) {
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
            <p onClick={() => handleTopicChange('Topic #1')} style={{ cursor: 'pointer' }}>
                Topic #1
            </p>
            <p onClick={() => handleTopicChange('Topic #2')} style={{ cursor: 'pointer' }}>
                Topic #2
            </p>
            <p onClick={() => handleTopicChange('Topic #3')} style={{ cursor: 'pointer' }}>
                Topic #3
            </p>
            </div>
            <div className="SP1arrow-down"></div>
        </div>
        <div className="SP2dropdown">
            <span>{selectedLanguage}</span>
            <div className="SP2dropdown-content">
            <p onClick={() => handleLanguageChange('Python')} style={{ cursor: 'pointer' }}>
                Python
            </p>
            <p onClick={() => handleLanguageChange('Java')} style={{ cursor: 'pointer' }}>
                Java
            </p>
            <p onClick={() => handleLanguageChange('JavaScript')} style={{ cursor: 'pointer' }}>
                JavaScript
            </p>
            </div>
            <div className="SP2arrow-down"></div>
        </div>
        <div className="SP3dropdown">
            <span>{selectedSkillLevel}</span>
            <div className="SP3dropdown-content">
            <p onClick={() => handleSkillLevelChange('Beginner')} style={{ cursor: 'pointer' }}>
                Beginner
            </p>
            <p onClick={() => handleSkillLevelChange('Intermediate')} style={{ cursor: 'pointer' }}>
                Intermediate
            </p>
            <p onClick={() => handleSkillLevelChange('Expert')} style={{ cursor: 'pointer' }}>
                Expert
            </p>
            </div>
            <div className="SP3arrow-down"></div>
        </div>
        </>
    );
    }
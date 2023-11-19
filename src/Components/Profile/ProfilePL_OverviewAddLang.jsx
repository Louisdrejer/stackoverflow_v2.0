import React, { useState } from 'react';
import './Profile.css';

export default function ProfilePl_OverviewAddLang({ user, onDiscard, onApprove }) {
  const defaultLanguage = 'Choose languages';
  const defaultSkillLevel = 'Your skillLevel';

  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState(defaultSkillLevel);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleSkillLevelChange = (skillLevel) => {
    setSelectedSkillLevel(skillLevel);
  };

  const handleDiscard = () => {
    onDiscard();
  };

  const handleApprove = () => {
    if (selectedLanguage === defaultLanguage || selectedSkillLevel === defaultSkillLevel) {
      // Display an alert if the language is still the default message
      alert('Please select a language and skill level before approving.');
      return;
    }

    // Check if the language already exists in the user's programming languages
    const existingLanguageIndex = user.programmingLanguages.findIndex(
      (lang) => lang.languages === selectedLanguage
    );

    if (existingLanguageIndex !== -1) {
      // If the language already exists
      const existingSkillLevel = user.programmingLanguages[existingLanguageIndex].skillLevel;

      if (existingSkillLevel === selectedSkillLevel) {
        // Display an alert if the skill level is the same as before
        alert('You are trying to change a language to a skill level you already have.');
        return;
      } else {
        // Update the skill level
        const updatedLanguages = [...user.programmingLanguages];
        updatedLanguages[existingLanguageIndex].skillLevel = selectedSkillLevel;

      }
    } else {
      // If the language doesn't exist, add the new language to the user's profile
      onApprove({
        languages: selectedLanguage,
        skillLevel: selectedSkillLevel,
      });
    }

    onDiscard();
  };

  return (
    <div style={{ marginBottom: '100px' }}>
      <div className="PLAndSkillLevel">
        <div className="ProgrammingLanguages">
          <div className="Languagesnr">Languages</div>
          <div className="PLdropdown">
            <span>{selectedLanguage}</span>
            <div className="PLdropdown-content">
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
            <div className="PLarrow-down"></div>
          </div>
        </div>
        <div className="SkillLevel">
          <div className="SkillLevelHeader">Skill Level</div>
          <div className="SkillLvldropdown">
            <span>{selectedSkillLevel}</span>
            <div className="SkillLvldropdown-content">
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
            <div className="Skillarrow-down"></div>
          </div>
        </div>
        <div className="profileButton">
          <button className='ApprovedButton' onClick={handleApprove}>
            &#10003;
          </button>
          <button className="addProfilediscardButton" onClick={handleDiscard}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}
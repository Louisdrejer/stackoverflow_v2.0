import React, { useState } from 'react';
import './Profile.css';

export default function ProfilePl_OverviewAddLang({ user, onDiscard, onApprove }) {
  const [selectedLanguage, setSelectedLanguage] = useState('Choose languages');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('Your skillLevel');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleSkillLevelChange = (skillLevel) => {
    setSelectedSkillLevel(skillLevel);
  };

  const handleDiscard = () => {
    onDiscard(); // Call the function passed from the parent to remove this component
  };

  const handleApprove = () => {
    // Call the function passed from the parent to add the new language to the user's profile
    onApprove({
      languages: selectedLanguage,
      skillLevel: selectedSkillLevel,
    });
    onDiscard(); // Remove this component after approving
  };

  return (
    <div>
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

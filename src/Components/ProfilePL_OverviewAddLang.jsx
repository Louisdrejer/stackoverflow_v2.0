import React, { useState, useEffect } from 'react';

import { updateSkillLevel} from '../Scripts/Database';
export default function ProfilePl_OverviewAddLang({ onDiscard, skillLevel, username}) {
  const defaultLanguage = 'CHOOSE LANGUAGES';
  const defaultSkillLevel = 'YOUR SKILLLEVEL';

  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState(defaultSkillLevel);
  console.log(skillLevel)
  useEffect(() => {
    if (selectedSkillLevel !== defaultSkillLevel && selectedLanguage !== defaultLanguage) {
      handleApprove();
    }
  }, [selectedLanguage, selectedSkillLevel]); 

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
    const matchedSkillLevelIndex = skillLevel.findIndex(
      (item) => item.LANGUAGE === selectedLanguage
    );
  
    if (matchedSkillLevelIndex !== -1) {
      skillLevel[matchedSkillLevelIndex].SKILLLEVEL = selectedSkillLevel;
    } else {
      console.log(`Skill level not found for ${selectedLanguage}`);
    }
    updateSkillLevel(username, skillLevel)
    onDiscard();
  };
  
  return (
    <div>
      <div className="PLAndSkillLevel">
        <div className="ProgrammingLanguages">
          <div className="Languagesnr">LANGUAGE</div>
          <div className="PLdropdown">
            <span>{selectedLanguage}</span>
            <div className="PLdropdown-content">
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
            <div className="PLarrow-down"></div>
          </div>
        </div>
        <div className="SkillLevel">
          <div className="SkillLevelHeader">SKILL LEVEL</div>
          <div className="SkillLvldropdown">
            <span>{selectedSkillLevel}</span>
            <div className="SkillLvldropdown-content">
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
            <div className="Skillarrow-down"></div>
          </div>
          {/**    <button className="discardButton" onClick={() => handleDiscard(index)}>
                  x
                </button>
                 */} 
        </div>
      </div>
    </div>
  );
}

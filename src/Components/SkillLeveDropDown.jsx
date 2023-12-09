import React, { useEffect, useState } from 'react';

export default function SkillLeveDropDown({ onSkillLevelChange, defaultSkillLevel }) {
  const [selectedSkillLevel, setSelectedSkillLevel] = useState(defaultSkillLevel);

  const handleSkillLevelChange = (skillLevel) => {
    setSelectedSkillLevel(skillLevel);
    onSkillLevelChange(skillLevel);
  };

  useEffect(() => {
  }, []);

  return (
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
  );
}

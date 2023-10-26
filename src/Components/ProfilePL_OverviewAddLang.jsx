import React, { useState } from 'react';

export default function ProfilePl_OverviewAddLang({ user, setUser, onDiscard, onApprove }) {
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

  const handleApprove2 = async () => {
    const userId = user.id || 0;
  
    try {
      const response = await fetch(`http://localhost:8000/api/users/${userId}/programmingLanguages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,  // Include the userId in the request body
          languages: 'NewLanguage',
          skillLevel: 'Advanced',
        }),
      });
  
      if (!response.ok) {
        // Handle the error and log details
        const errorMessage = await response.text();
        console.error(`Failed to add a new language. Status: ${response.status}, Error: ${errorMessage}`);
        return;
      }
  
      const newLanguage = await response.json();
      console.log('New language added:', newLanguage);
  
      // Update the user state with the new language
      setUser((prevUser) => {
        const updatedUser = { ...prevUser };
        updatedUser.programmingLanguages.push(newLanguage);
        return updatedUser;
      });
  
      // Manually update the client-side state (for testing purposes)
  
      // Optionally, you can perform additional actions after adding the language
      // For example, close a modal or perform any other UI update
    } catch (error) {
      console.error('Error occurred during fetch:', error);
    }
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

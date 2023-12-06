import React, { useState, useEffect } from 'react';
import ProfilePlOverviewAddLang from './ProfilePL_OverviewAddLang';
import AddNewLanguages from './AddNewLanguages';
import { getSkillLevelByAuthor } from '../Scripts/Database';

export default function ProfilePL_Overview() {
  const [SkillLevel, setSkillLevel] = useState([]);
  const [Username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
        const currentUser = JSON.parse(currentUserString);
        const username1 = currentUser.username;
        const result = await getSkillLevelByAuthor(username1);
        console.log(result);
        setUsername(username1);
        setSkillLevel(result);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);

  const handleDiscard = async (index) => {
    const updatedSkillLevel = [...SkillLevel];
    updatedSkillLevel.splice(index, 1);
    setSkillLevel(updatedSkillLevel);
  };

  const [isAddLanguageVisible, setAddLanguageVisible] = useState(false);

  const handleAddLanguageClick = () => {
    setAddLanguageVisible(true);
  };

  const handleApprove = (newLanguage) => {
    setSkillLevel((prevSkillLevel) => [...prevSkillLevel, newLanguage]);
    
  };

  return (
    <div className="profilePLBox">
      <div className="profilePLTitle">PROGRAMMING LANGUAGES</div>
      <div className="profilePLArea">
        {SkillLevel &&
          SkillLevel.map((language, index) => (
            <div key={index} className="PLAndSkillLevel">
              <div className="ProgrammingLanguages">
                <div className="Languagesnr">{`Languages #${index + 1}`}</div>
                <div className="PL">
                  <span>{language.languages}</span>
                </div>
              </div>
              <div className="SkillLevel">
                <div className="SkillLevelHeader">Skill Level</div>
                <div className="SkillLvl">
                  <span>{language.skillLevel}</span>
                </div>
                <button className="discardButton" onClick={() => handleDiscard(index)}>
                  x
                </button>
              </div>
            </div>
          ))}

        <div>
          {isAddLanguageVisible && (
            <ProfilePlOverviewAddLang
              onDiscard={() => setAddLanguageVisible(false)}
              onApprove={handleApprove}
            />
          )}
          <AddNewLanguages onClick={handleAddLanguageClick} />
        </div>
      </div>
    </div>
  );
}
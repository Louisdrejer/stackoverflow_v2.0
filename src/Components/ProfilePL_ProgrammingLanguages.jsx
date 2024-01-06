import React, { useState, useEffect } from 'react';
import ProfilePlOverviewAddLang from './ProfilePL_OverviewAddLang';
import AddNewLanguages from './AddNewLanguages';
import { getSkillLevelByAuthor2 } from '../Scripts/Database';


export default function ProfilePL_Overview() {
  const [SkillLevel, setSkillLevel] = useState([]);
  const [Username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
        const currentUser = JSON.parse(currentUserString);
        const username1 = currentUser.username;
        setUsername(username1)
        const result = await getSkillLevelByAuthor2(username1);
        console.log(result[0].SkillLevel);
        setUsername(username1);
        setSkillLevel(result[0].SkillLevel);
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

  const handleApprove = async (newLanguage) => {
    const updatedSkillLevels = [...SkillLevel, newLanguage];
    setSkillLevel(updatedSkillLevels);
  };
  
  return (
    <div className="profilePLBox">
      <div className="profilePLTitle">PROGRAMMING LANGUAGES</div>
      <div className="profilePLArea">
        {SkillLevel &&
          SkillLevel.map((language, index) => (
            <div key={index} className="PLAndSkillLevel">
              <div className="ProgrammingLanguages">
                <div className="Languagesnr">{`LANGUAGES #${index + 1}`}</div>
                <div className="PL">
                  <span>{language.LANGUAGE}</span>
                </div>
              </div>
              <div className="SkillLevel">
                <div className="SkillLevelHeader">SKILL LEVEL</div>
                <div className="SkillLvl">
                  <span>{language.SKILLLEVEL}</span>
                </div>
              </div>
              {/* Uncomment the button if needed */}
              {/* <button className="discardButton" onClick={() => handleDiscard(index)}>
                x
              </button> */}
            </div>
          ))}

        <div>
          {isAddLanguageVisible && (
            <ProfilePlOverviewAddLang
              onDiscard={() => setAddLanguageVisible(false)}
              onApprove={handleApprove}
              skillLevel={SkillLevel}
              username={Username}
            />
          )}
          <AddNewLanguages onClick={handleAddLanguageClick} />
        </div>
      </div>
    </div>
  );
}

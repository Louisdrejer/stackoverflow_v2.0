import React, { useState, useEffect } from 'react';
import { getSkillLevelByAuthor2 } from '../Scripts/Database';
import {useLocation,} from 'react-router-dom';

export default function OtherProfilePLProgrammingLanguages() {
  const [SkillLevel, setSkillLevel] = useState([]);
  const [Username, setUsername] = useState('');
  const location = useLocation();
  const questionState = location.state;
  const { username} = questionState

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUsername(username)
        const result = await getSkillLevelByAuthor2(username);
        console.log(result[0].SkillLevel);
        setSkillLevel(result[0].SkillLevel);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);
  
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
            </div>
          ))}

      </div>
    </div>
  );
}

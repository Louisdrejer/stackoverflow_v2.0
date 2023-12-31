import React, { useState, useEffect } from 'react';
import './Profile.css';
import ProfileHeaderBox from '../../Components/ProfileHeaderBox';
import ProfileOverview from '../../Components/ProfileOverview';
import ProfilePLProgrammingLanguages from '../../Components/ProfilePL_ProgrammingLanguages';
import ProfilePLAnswers from '../../Components/ProfilePL_Answers';
import ProfilePLQuestions from '../../Components/ProfilePL_Questions';
import ProfilePLNewMessages from '../../Components/ProfilePL_NewMessages';

export default function Profile() {
  const [user, setUser] = useState({});
  const [selectedComponent, setSelectedComponent] = useState('Questions');

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
  
  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="profileBackground">
      <div className="profileOverviewDisplay">
        <ProfileHeaderBox user={user} />
        <div className="profileOverviewDisplay2">
          <ProfileOverview user={user} setUser={setUser} onComponentChange={handleComponentChange} />
          {selectedComponent === 'Questions' && <ProfilePLQuestions user={user} setUser={setUser} />}
          {selectedComponent === 'Answers' && <ProfilePLAnswers user={user} setUser={setUser} />}
          {selectedComponent === 'ProgrammingLanguages' && <ProfilePLProgrammingLanguages user={user} setUser={setUser} />}
          {selectedComponent === 'NewMessages' && <ProfilePLNewMessages user={user} setUser={setUser} />}
        </div>
      </div>
    </div>
  );
}

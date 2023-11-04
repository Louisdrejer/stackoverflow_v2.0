import React, { useState, useEffect } from 'react';
import LeftNav from '../../Components/LeftNav';
import './Profile.css';
import ProfileHeaderBox from '../../Components/ProfileHeaderBox';
import ProfileOverview from '../../Components/ProfileOverview';
import ProfilePL_ProgrammingLanguages from '../../Components/ProfilePL_ProgrammingLanguages';
import ProfilePL_Answers from '../../Components/ProfilePL_Answers';
import ProfilePL_Questions from '../../Components/ProfilePL_Questions';
import ProfilePL_NewMessages from '../../Components/ProfilePL_NewMessages';

export default function Profile() {
  const [user, setUser] = useState({});
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    const dataFetch = () => {
      fetch('/api/users')
        .then((res) => res.json())
        .then((data) => {
          const userWithId = data.find((userData) => userData.id === 0);
          setUser(userWithId);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
    dataFetch();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="profileBackground">
      <LeftNav />
      <div className="profileOverviewDisplay">
        <ProfileHeaderBox user={user} />
        <div className="profileOverviewDisplay2">
          <ProfileOverview user={user} setUser={setUser} onComponentChange={handleComponentChange} />
          {selectedComponent === 'Questions' && <ProfilePL_Questions user={user} setUser={setUser} />}
          {selectedComponent === 'Answers' && <ProfilePL_Answers user={user} setUser={setUser} />}
          {selectedComponent === 'ProgrammingLanguages' && <ProfilePL_ProgrammingLanguages user={user} setUser={setUser} />}
          {selectedComponent === 'NewMessages' && <ProfilePL_NewMessages user={user} setUser={setUser} />}
        </div>
      </div>
    </div>
  );
}

// Profile.js
import React, { useState, useEffect } from 'react';
import LeftNav from '../Homepage/LeftNav';
import './Profile.css';
import ProfileHeaderBox from './ProfileHeaderBox';
import ProfileOverview from './ProfileOverview';
import ProfilePL_Overview from './ProfilePL_Overview';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const dataFetch = () => {
      fetch('http://localhost:7000/users')
        .then((res) => res.json())
        .then((data) => {
          const userWithId = data.find((userData) => userData.id === 0);
          setUser(userWithId);
        });
    };
    dataFetch();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="profileBackground">
      <LeftNav />
      <div className="profileOverviewDisplay">
        <ProfileHeaderBox user={user} />
        <div className="profileOverviewDisplay2">
          <ProfileOverview user={user}/>
          <ProfilePL_Overview user={user} setUser={setUser}/>
        </div>
      </div>
    </div>
  );
}

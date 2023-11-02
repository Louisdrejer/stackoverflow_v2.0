// Profile.js
import React, { useState, useEffect } from 'react';
import LeftNav from '../../Components/LeftNav';
import './Profile.css';
import ProfileHeaderBox from '../../Components/ProfileHeaderBox';
import ProfileOverview from '../../Components/ProfileOverview';
import ProfilePL_Overview from '../../Components/ProfilePL_Overview';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const dataFetch = () => {
      fetch('/api/users') // Use the proxy path
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

  return (
    <div className="profileBackground">
      <LeftNav />
      <div className="profileOverviewDisplay">
        <ProfileHeaderBox user={user} />
        <div className="profileOverviewDisplay2">
          <ProfileOverview user={user}/>
             {/* Remove this comment to se the overview component*/}
             <ProfilePL_Overview user={user} setUser={setUser}/> 
        </div>
      </div>
    </div>
  );
}

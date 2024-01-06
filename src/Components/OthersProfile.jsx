import React, { useState, useEffect } from 'react';
import '../Pages/Profile/Profile.css';
import OtherProfileHeaderBox from '../Components/OtherProfileHeaderBox';
import OtherProfileOVerview from '../Components/OtherProfileOVerview';
import OtherProfilePLProgrammingLanguages from '../Components/OtherProfilePLProgrammingLanguages';
import OtherProfilePLAnswers from '../Components/OtherProfilePL_Answers';
import OtherProfilePLQuestions from '../Components/OtherProfilePL_Questions';

export default function OthersProfile() {
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
        <OtherProfileHeaderBox/>
        <div className="profileOverviewDisplay2">
          <OtherProfileOVerview onComponentChange={handleComponentChange} />
          {selectedComponent === 'Questions' && <OtherProfilePLQuestions  />}
          {selectedComponent === 'Answers' && <OtherProfilePLAnswers />}
          {selectedComponent === 'ProgrammingLanguages' && <OtherProfilePLProgrammingLanguages />}
        </div>
      </div>
    </div>
  );
}

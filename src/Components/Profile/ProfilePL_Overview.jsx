import React, { useState } from 'react';
import './Profile.css';
import ProfilePl_OverviewAddLang from './ProfilePL_OverviewAddLang';
import AddNewLanguages from './AddNewLanguages';

export default function ProfilePL_Overview({ user, setUser }) {
    const handleDiscard = async (index) => {
        //   const userId = user.id;

        // try {
        // const response = await fetch(`http://localhost:7000/users/${userId}/programmingLanguages`, {
        // method: 'DELETE',
        //headers: {
        //       'Content-Type': 'application/json',
        //   },
        // });

        // if (response.ok) {
        const updatedUser = { ...user };
        updatedUser.programmingLanguages.splice(index, 1);
        setUser(updatedUser);
        //  } else {
        // Handle error, maybe revert the state change
        //  console.error('Failed to delete data on the server');
        // You might want to add some error handling logic here
        //   }
        //} catch (error) {
        // console.error('Error occurred during fetch:', error);
        // }
    };

    const [isAddLanguageVisible, setAddLanguageVisible] = useState(false);

    const handleAddLanguageClick = () => {
        setAddLanguageVisible(true);
    };
    const handleApprove = (newLanguage) => {
        // Logic to add the new language to the user's profile
        const updatedUser = { ...user };
        updatedUser.programmingLanguages.push(newLanguage);
        setUser(updatedUser);
      };

    return (
        <div className="profilePLBox">
            <div className="profilePLArea">
                <div className="profilePLTitle">Programming Languages</div>

                {user.programmingLanguages &&
                    user.programmingLanguages.map((language, index) => (
                        <div key={index} className="PLAndSkillLevel">
                            <div className="ProgrammingLanguages">
                                <div className="Languagesnr">{`Languages #${index + 1}`}</div>
                                <div className="PLdropdown">
                                    <span>{language.languages}</span>
                                </div>
                            </div>
                            <div className="SkillLevel">
                                <div className="SkillLevelHeader">Skill Level</div>
                                <div className="SkillLvldropdown">
                                    <span>{language.skillLevel}</span>
                                </div>
                                <button
                                    className="discardButton"
                                    onClick={() => handleDiscard(index)}
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    ))}

                <div>
                    <AddNewLanguages onClick={handleAddLanguageClick} />

                   
          {isAddLanguageVisible && (
            <ProfilePl_OverviewAddLang
              user={user}
              setUser={setUser}
              onDiscard={() => setAddLanguageVisible(false)}
              onApprove={handleApprove}
            />
                    )}
                </div>
            </div>
        </div>
    );
}

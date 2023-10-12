import React from 'react'
import "./Profile.css"
export default function ProfilePL_Overview() {
    return (
        <div className="profilePLBox">
            <div className="profilePLArea">
                <div className="profilePLTitle">Programming Languages</div>
                <div className="PLAndSkillLevel">
                    <div className="ProgrammingLanguages">
                        <div className="Languagesnr">Languages #1</div>
                        <div className="PLdropdown">
                            <span>Python</span>
                            <div className="PLdropdown-content">
                                <p>Menu Item 1</p>
                                <p>Menu Item 2</p>
                                <p>Menu Item 3</p>
                            </div>
                            <div className="PLarrow-down"></div>
                        </div>
                    </div>
                    <div className="SkillLevel">
                        <div className="SkillLevelHeader">Skill Level</div>
                        <div className="SkillLvldropdown">
                            <span>Intermediate</span>
                            <div className="SkillLvldropdown-content">
                                <p>Menu Item 1</p>
                                <p>Menu Item 2</p>
                                <p>Menu Item 3</p>
                            </div>
                            <div className="Skillarrow-down"></div>
                        </div>
                        <button className='discardButton'>x</button>
                    </div>

                </div>
                <div className="addNewLanguages">
                    <div className="addNewLanguagesButton">+
                    </div>
                    <div className="addNewLanguagesText">Add A New Language</div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import SmallQuestionBox from './SmallQuestionBox'

export default function SubmitBox() {
    return (
        <div className="submitAQuestionContainer">
            <div className="submitAQuestionHeader">SUBMIT A QUESTION</div>
            <div className="inputQuestion">
                <div className="submitAQuestiontitle">Title</div>
                <input className='inputQuestionTitle' type="title" placeholder='The title'/>
                <input className='inputPlaintext' type="title" placeholder='Write anything here...'/>
                <div className="menubox">
                    <div className="dropdown">
                        <span>TOPIC</span>
                        <div className="dropdown-content">
                            <p>Menu Item 1</p>
                            <p>Menu Item 2</p>
                            <p>Menu Item 3</p>
                        </div>
                        <div className="arrow-down"></div>
                    </div>
                    <div className="dropdown">
                        <span>LANGUAGE</span>
                        <div className="dropdown-content">
                            <p>Menu Item 1</p>
                            <p>Menu Item 2</p>
                            <p>Menu Item 3</p>
                        </div>
                        <div className="arrow-down"></div>
                    </div>
                    <div className="dropdown">
                        <span>SKILL LEVEL</span>
                        <div className="dropdown-content">
                            <p>Menu Item 1</p>
                            <p>Menu Item 2</p>
                            <p>Menu Item 3</p>
                        </div>
                        <div className="arrow-down"></div>
                    </div>
                    <button className='submitButton'>submit</button>
                </div>
            </div>
            <div className="newQustion">New Question</div>
            <SmallQuestionBox name="User123" title="This is a question"
                              tags={[{name: "tag1", color: "red"}, {name: "tag2", color: "yellow"}]}/>
            <SmallQuestionBox name="Louis" title="How to server?"
                              tags={[{name: "tag3", color: "green"}, {name: "tag5", color: "purple"}]}/>
            <SmallQuestionBox name="SomeOneElse" title="This is a question"
                              tags={[{name: "tag5", color: "blue"}, {name: "tag6", color: "white"}]}/>
        </div>
    )
}

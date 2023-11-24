import React, { useState, useEffect } from 'react';
import SmallQuestionBox from './SmallQuestionBox';
import { postQuestion, getQuestionsByAuthor } from '../Scripts/Database';
import { async } from 'q';
import DropdownMenues from './DropdownMenues';

export default function SubmitBox() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
console.log(questions)

useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await getQuestionsByAuthor('Emil');
      setQuestions(result);
      console.log(result); // Log the updated value of questions after fetching
    } catch (error) {
      console.error('Error fetching questions:', error);
      // handle the error as needed
    }
  };

  fetchData();
}, []);
  return (
    <div className="submitAQuestionContainer">
      <div className="submitAQuestionHeader">SUBMIT A QUESTION</div>
      <div className="inputQuestion">
        <div className="submitAQuestiontitle">Title</div>
        <input className="inputQuestionTitle" type="title" placeholder="The title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="inputPlaintext" type="title" placeholder="Write anything here..." value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className="menubox">
          <div style={{marginTop: "5px"}}>
          <DropdownMenues/>
          </div>
          <button className="submitButton" onClick={() => postQuestion({ title, author: 'Louis', text: description, tags: ['1', '3'] })}>
            Submit
          </button>
           {/*  <button className="submitButton" onClick={() => getQuestionsByAuthor('Emil')}>
            test
          </button> */}
        </div>
      </div>
      <div className="newQustion">RECENT QUESTION</div>
      {questions.slice(0, 6).map((question, index) => (
        <SmallQuestionBox key={index} name={question.Author} title={question.Title} text={question.Text} tags={question.Tags} />
      ))}
  
    </div>
  );
}

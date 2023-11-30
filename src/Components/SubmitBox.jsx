import { useState, useEffect } from "react";
import SmallQuestionBox from './SmallQuestionBox'
import {postQuestion, getQuestionsByTag, getQuestionsByAuthor} from "../Scripts/Database"


export default function SubmitBox() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestionsByAuthor("Emil").then(result => {
      setQuestions(result);
      console.log(result)
    })
  }, [])


  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getQuestionsByAuthor('Emil');
  //       console.log(result)
  //       setQuestions(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  const [title, setTitle] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [description, setDescription] = useState("");
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };


  return (
    <div className="submitAQuestionContainer">
      <div className="submitAQuestionHeader">SUBMIT A QUESTION</div>
      <div className="inputQuestion">
        <div className="submitAQuestiontitle">Title</div>
        <input className='inputQuestionTitle' type="title" placeholder='The title' value={title} onChange={changeTitle} />
        <input className='inputPlaintext' type="title" placeholder='Write anything here...' value={description} onChange={changeDescription} />
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
          <button className='submitButton' onClick={() => postQuestion({title:title, author: "Emil", text: description, tags: ["1", "3"]})}>Submit</button>
          <button className='submitButton' onClick={() => getQuestionsByAuthor("Emil")}>test</button>
        </div>
      </div>
      <div className="newQustion">New Question</div>




        {questions.map((question,  i) => (
          <SmallQuestionBox name="User123" title="This is a question" tags={[{name: "tag1", color: "red"}, {name: "tag2", color: "yellow"}]}/>
        ))}
    </div>
  )
}

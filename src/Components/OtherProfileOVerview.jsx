
import React, { useState, useEffect } from 'react';
import { getNumberOfQuestionsByAuthor, getNumberOfCommentsByAuthor } from '../Scripts/Database';
import {useLocation,} from 'react-router-dom';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { FaRegComment } from "react-icons/fa";
import { getCurrentUser, getLikesAndComments } from '../Scripts/Database';

export default function OtherProfileOVerview({ onComponentChange }) {
  const [clickedLine, setClickedLine] = useState('Questions');
  const location = useLocation();
  const questionState = location.state;
  console.log(questionState)
  const { username} = questionState
  console.log(questionState)

  const [stats, setStats] = useState([0, 0])

  const getNumberOfPL = () => {
    return 0;
  };

  //get number of likes and comments for stats
  useEffect(() => {
    getLikesAndComments(username)
    .then(result => setStats([result["Sum"], result["Count"]]))
  }, [username]);

  const handleClick = (line) => {
    setClickedLine(line === clickedLine ? 'Questions' : line);
    onComponentChange(line);
  };


  return (
    <div className="profileOverviewBox">
      <div className="profileOverviewProfile">
        <div className="profileOverviewUserLogo">
          {/* <div className="profileOverviewSmallUserLogo">
            <div className="PL_NewMessages">+{numberOfNewMessages}</div>
          </div> */}

        </div>

        <div className="profileOverviewProfileName">
          {username}
        </div>

        <div className='stats' style={{width:"150%", color:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <BiSolidLike style={{transform: "scaleX(-1)"}}/>
          <div  style={{width:"2%"}}></div>
          <div className='profileLikeStats'>{stats[0]}</div>
          <div  style={{width:"12%"}}></div>
          <FaRegComment/>
          <div  style={{width:"2%"}}></div>
          <div className='profileCommentsStats'>{stats[1]}</div>
        </div>

        <div className="profileOverviewProfileEmail">
          {/*email*/}
        </div>
      </div>

      <div className="profileOverviewInfo">
        <hr style={{ width: "110%", border: "1px solid white", marginLeft: "-12px", marginTop: "150px", marginBottom: "-130px" }} />
        <div
          className={`profileOverviewQuestionLine ${clickedLine === 'Questions' ? 'clicked' : ''}`}
          onClick={() => handleClick('Questions')}
        >
          <div className="PO_Question"> Their Questions</div>
          <div className="PO_QuestionNumber">
            {/* {numberOfQuestions} */}
          </div>
        </div>
        <div

          className={`profileOverviewAnswersLine ${clickedLine === 'Answers' ? 'clicked' : ''}`}
          onClick={() => handleClick('Answers')}
        >
          <div className="PO_Answers">Their Comments</div>
          <div className="PO_AnswersNumber">{/* {numberOfAnswers} */}</div>
        </div>
        <div
          className={`profileOverviewPLLine ${clickedLine === 'ProgrammingLanguages' ? 'clicked' : ''}`}
          onClick={() => handleClick('ProgrammingLanguages')}
        >
          <div className="PO_PL">Their Programming Languages</div>
          <div className="PO_PLNumber">{/* {numberOfPL} */}</div>
        </div>

      </div>

    </div>

  );
}

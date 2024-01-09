import arrow from '../img/arrow.svg';
import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import SmallQuestionBox from './SmallQuestionBox';
import SmallAnswerBox from './SmallAnswersBox';
import { postComment, getCommentsById, getNewestCommentsById } from '../Scripts/Database';


export default function CommentPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [description, setDescription] = useState('');
  const [Comments, setComments] = useState([]);
  
  const location = useLocation();
  const questionState = location.state;
  const { username, title, text, tags, pid } = questionState




  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewestCommentsById(pid);
        setComments(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    window.scrollTo(0, 0);
    fetchData();
  }, []);


  const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
  const currentUser = JSON.parse(currentUserString);
  const currentUsername = currentUser.username;

  const handlePostComment = async () => {
    try {
      const result = await postComment({
        author: currentUsername, 
        text: description,
        ResponseID: pid 
      });
      setDescription('');
      const updatedComments = await getNewestCommentsById(pid);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error posting or fetching comment:', error);
    }
  };
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0);
  };

return (
  <div className="Answerpage commentContainer"> 
    <div className="headerWithBackButton">
      <button className="back-button" onClick={() => window.history.back()}>
        <img src={arrow} alt="Back" />
      </button>
      <span className="recentQuestionsLabel">Questions</span>
    </div>
    <div className='QuestionDescriptionContainer'>      
      <SmallQuestionBox name={username} title={title} text={text} tags={tags}  objectId={pid} activeUser={currentUsername}/>  
    </div>
    
 
      {Comments.length > 0 && (
        <>
         <div className="previousAnswerContainer">
          <div className="previousAnswerHeader">PREVIOUS ANSWERS</div>
          <div className='commentsContainer'>   
            {Comments.slice(startIndex, endIndex).map((comment, index) => (
              <SmallAnswerBox 
                key={index}
                name={comment.Author}
                text={comment.Text}
                likes={comment.Likes}
                disLikes={comment.DisLikes}
                objectId={comment.objectId}
                date={comment.Date}
                questionUser={username}
              />
            ))}
            {Comments.length >= itemsPerPage && (
              <div className="pagination">
                {currentPage !== 1 && (
                  <button
                    style={{
                      background: 'rgb(67, 68, 73)',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      prevPage();
                    }}
                    disabled={currentPage === 1}
                  >
                    previous
                  </button>
                )}

                <div className={`currentPage ${Comments.length < itemsPerPage ? 'hidden' : ''}`}>
                  {currentPage}
                </div>

                {endIndex < Comments.length && (
                  <button
                    style={{
                      background: 'rgb(67, 68, 73)',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={endIndex >= Comments.length}
                  >
                    next
                  </button>
                )}
              </div>
            )}
          </div>
          </div>
        </>
      )}
  


    <div className="submitCommentContainer">
      <div className="submitCommentHeader">YOUR ANSWER</div>
      <div className="inputComment">
      <div style={{ marginTop: '10px' }}></div>
        <textarea
          className="inputPlaintextAnswer"
          type="text" 
          placeholder="Write anything here... remember to be helpful and friendly :)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div style={{ marginTop: '6px' }}></div>
        <button className="submitAnswerButton" onClick={handlePostComment}>
          Submit
        </button>
      </div>
    </div>
  </div>
);
}
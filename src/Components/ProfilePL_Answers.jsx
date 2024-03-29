import { useEffect, useState } from 'react';
import { getCommentsByAuthor } from '../Scripts/Database';
import MycommentBox from './MyCommentBox';

export default function ProfilePL_Answers() {
  const [Comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [Update, setUpdate] = useState(1)
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
        const currentUser = JSON.parse(currentUserString);
        const username = currentUser.username;
        const result = await getCommentsByAuthor(username);
        console.log(result);
        setComments(result);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [Update]);

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
  console.log(Comments)

  return (
    <div className="myAnswersContainer">
      <div className="myAnswersHeaderText">MY COMMENTS</div>
      {Comments.slice(startIndex, endIndex).map((comment, index) => (
        <MycommentBox
          key={index}
          title={comment.QuestionTitle}
          text={comment.Text}
          tags={comment.QuestionTags}
          likes={comment.Like}
          dislikes={comment.DisLike}
          objectId={comment.objectId}
          setUpdate ={setUpdate} update ={Update}
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
  );
}

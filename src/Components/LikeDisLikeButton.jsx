import { useState } from 'react';
import './LikeDislike.css';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';

const LikeDislikeButtons = (props) => {
  console.log(props)
  const [dislikes, setDislikes] = useState(props.disLikes);
  const [likes, setLikes] = useState(props.likes);

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleLike = () => {
    if (!likeClicked) {
      setLikes(likes + 1);
      if (dislikeClicked) {
        setDislikes(dislikes - 1);
        setDislikeClicked(false);
      }
    } else {
      setLikes(likes - 1);
    }
    setLikeClicked(!likeClicked);
  };

  const handleDislike = () => {
    if (!dislikeClicked) {
      setDislikes(dislikes + 1);
      if (likeClicked) {
        setLikes(likes - 1);
        setLikeClicked(false);
      }
    } else {
      setDislikes(dislikes - 1);
    }
    setDislikeClicked(!dislikeClicked);
  };

  return (
    <div className='LikeDislikeButton'>
      <div className='likeButton'>
        <div
          className={`likeIcon ${likeClicked ? 'clicked2' : ''}`}
          onClick={handleLike}
        >
          <BiSolidLike />
        </div>
        <div className='likeCount'>{likes}</div>
      </div>
      <div style={{ fontSize: '14px' }}>|</div>
      <div className='DislikeButton'>
        <div
          className={`DislikeIcon ${dislikeClicked ? 'clicked2' : ''}`}
          style={{ transform: 'scaleX(-1)' }}
          onClick={handleDislike}
        >
          <BiSolidDislike />
        </div>
        <div className='DislikeCount'>{dislikes}</div>
      </div>
    </div>
  );
};

export default LikeDislikeButtons;

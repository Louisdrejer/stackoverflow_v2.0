// LikeDislikeButtons.js

import React, { useState } from 'react';
import './LikeDislike.css';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { updateLikeDislikeDB } from '../Scripts/Database';

const LikeDislikeButtons = (props) => {
  const dislikes = props.disLikes
  const likes = props.likes
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  // const handleLike = async () => {
  //   if (!likeClicked) {
  //     setLikes(likes + 1);
  //     if (dislikeClicked) {
  //       setDislikes(dislikes - 1);
  //       setDislikeClicked(false);
  //       await updateDislikesInDatabase(props.objectId, dislikes - 1);
  //     }
  //     await updateLikesInDatabase(props.objectId, likes + 1);
  //   } else {
  //     setLikes(likes - 1);
  //     await updateLikesInDatabase(props.objectId, likes - 1);
  //   }
  //   setLikeClicked(!likeClicked);
  // };

  const handleLike = () => {
    if (!dislike) {
      setLike(!like);
      
      //increment like in DB if false, else decrement
      updateLikeDislikeDB(props.objectId, "Likes", !like)

    }
  };

  // const handleDislike = async () => {
  //   if (!dislikeClicked) {
  //     setDislikes(dislikes + 1);
  //     if (likeClicked) {
  //       setLikes(likes - 1);
  //       setLikeClicked(false);
  //       await updateLikesInDatabase(props.objectId, likes - 1);
  //     }
  //     await updateDislikesInDatabase(props.objectId, dislikes + 1);
  //   } else {
  //     setDislikes(dislikes - 1);
  //     await updateDislikesInDatabase(props.objectId, dislikes - 1);
  //   }
  //   setDislikeClicked(!dislikeClicked);
  // };


  const handleDislike = () => {
    if (!like) {
      setDislike(!dislike);

      //add like to DB
      updateLikeDislikeDB(props.objectId, "Dislikes", !dislike)

    }
  };

  return (
    <div className='LikeDislikeButton'>
      <div className='likeButton'>
        <div
          className={`likeIcon ${like ? 'clicked2' : ''}`}
          onClick={handleLike}
        >
          <BiSolidLike />
        </div>
        <div className='likeCount'>{Number(like) + likes}</div>
      </div>
      <div style={{ fontSize: '14px' }}>|</div>
      <div className='DislikeButton'>
        <div
          className={`DislikeIcon ${dislike ? 'clicked2' : ''}`}
          style={{ transform: 'scaleX(-1)' }}
          onClick={handleDislike}
        >
          <BiSolidDislike />
        </div>
        <div className='DislikeCount'>{Number(dislike) + dislikes}</div>
      </div>
    </div>
  );
};

export default LikeDislikeButtons;

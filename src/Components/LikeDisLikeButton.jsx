import  { useState } from 'react';
import './LikeDislike.css'
import { BiSolidLike, BiSolidDislike} from "react-icons/bi";

const LikeDislikeButtons = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className='LikeDislikeButton'>
        <div className="likeButton">
            <div className="likeIcon" onClick={handleLike}><BiSolidLike /></div>
            <div className="likeCount">{likes}</div>
        </div>
        <div style={{fontSize: "14px"}}>|</div>
        <div className="DislikeButton">
            <div className="DislikeIcon"style={{ transform: 'scaleX(-1)' }}onClick={handleDislike}><BiSolidDislike /> </div>
            <div className="DislikeCount">{dislikes}</div>
        </div>
    </div>
  );
};

export default LikeDislikeButtons;

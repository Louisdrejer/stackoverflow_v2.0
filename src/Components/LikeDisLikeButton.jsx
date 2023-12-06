import  { useState } from 'react';
import './LikeDislike.css'
import { BiSolidLike, BiSolidDislike} from "react-icons/bi";

const LikeDislikeButtons = () => {
  const [like, setLikes] = useState(false);
  const [dislike, setDislikes] = useState(false);

  const handleLike = () => {
    if (!dislike) {
      setLikes(!like);
    }
  };

  const handleDislike = () => {
    if (!like) {
      setDislikes(!dislike);
    }
  };

  return (
    <div className='LikeDislikeButton'>
        <div className="likeButton">
            <div className="likeIcon" onClick={handleLike}><BiSolidLike /></div>
            <div className="likeCount">{Number(like)}</div>
        </div>
        <div style={{fontSize: "14px"}}>|</div>
        <div className="DislikeButton">
            <div className="DislikeIcon"style={{ transform: 'scaleX(-1)' }}onClick={handleDislike}><BiSolidDislike /> </div>
            <div className="DislikeCount">{Number(dislike)}</div>
        </div>
    </div>
  );
};

export default LikeDislikeButtons;

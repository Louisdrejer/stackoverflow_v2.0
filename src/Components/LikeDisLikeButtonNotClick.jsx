import  { useState } from 'react';
import './LikeDislike.css'
import { BiSolidLike, BiSolidDislike} from "react-icons/bi";

const LikeDislikeButtonNotclick = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  return (
    <div className='LikeDislikeButtonNC'>
        <div className="likeButtonNC">
            <div className="likeIconNC"><BiSolidLike /></div>
            <div className="likeCountNC">{likes}</div>
        </div>
        <div style={{fontSize: "14px"}}>|</div>
        <div className="DislikeButtonNC">
            <div className="DislikeIconNC"><BiSolidDislike /> </div>
            <div className="DislikeCountNC">{dislikes}</div>
        </div>
    </div>
  );
};

export default LikeDislikeButtonNotclick;
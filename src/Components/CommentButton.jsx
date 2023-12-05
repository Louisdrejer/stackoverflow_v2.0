import React, {useState} from 'react';
import './CommentButton.css';
import { FaRegComment } from "react-icons/fa";

const CommentButton = () => {
    const [commentCount, setCommentCount] = useState(0);

    const handleCommentClick = () => {
        setCommentCount(commentCount + 1);
    };

    return (
        <div className="button-container">
            <button
                className="comment-button"
                onClick={handleCommentClick}
            >
            <FaRegComment style={{ color: 'white' }}/>
                
                <span className="comment-count">{commentCount}</span>
            </button>

        </div>
    );
};

export default CommentButton;

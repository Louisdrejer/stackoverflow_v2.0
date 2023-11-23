import React, {useState} from 'react';
import './CommentButton.css';

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

                💬
                <span className="comment-count">{commentCount}</span>
            </button>

        </div>
    );
};

export default CommentButton;

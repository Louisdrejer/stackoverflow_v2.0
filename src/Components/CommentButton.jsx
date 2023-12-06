import React, { useState, useEffect } from 'react';
import './CommentButton.css';
import { FaRegComment } from "react-icons/fa";
import { getNumberOfCommentsByResponseID } from '../Scripts/Database';

const CommentButton = ({ onClick, objectId }) => {
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count = await getNumberOfCommentsByResponseID(objectId);
        setCommentCount(count);
      } catch (error) {
        console.error('Error fetching comment count:', error);
      }
    };

    fetchData();
  }, [objectId]);

  return (
    <div className="button-container">
      <button
        className="comment-button"
        onClick={onClick}
      >
        <FaRegComment style={{ color: 'white' }} />
        <span className="comment-count">{commentCount}</span>
      </button>
    </div>
  );
};

export default CommentButton;

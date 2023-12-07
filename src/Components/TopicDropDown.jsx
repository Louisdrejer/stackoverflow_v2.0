import React, { useState } from 'react';
import SubmitBox from './SubmitBox';

export default function TopicDropDown({ onTopicChange }) {
    const defaultTopic = 'TOPIC';
    const [selectedTopic, setSelectedTopic] = useState(defaultTopic);

    const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
        onTopicChange(topic);
      };
    

    return (
        <div className="SP1dropdown">
        <span>{selectedTopic}</span>
        <div className="SP1dropdown-content">
        <p onClick={() => handleTopicChange('DATA TYPES')} style={{ cursor: 'pointer' }}>
            DATA TYPES
        </p>
        <p onClick={() => handleTopicChange('LISTS')} style={{ cursor: 'pointer' }}>
            LISTS
        </p>
        <p onClick={() => handleTopicChange('BACKEND')} style={{ cursor: 'pointer' }}>
            BACKEND
        </p>
        </div>
        <div className="SP1arrow-down"></div>
    </div>
    );
}

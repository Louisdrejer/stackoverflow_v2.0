import React, { useState } from 'react';

export default function TopicDropDown({ onTopicChange }) {
    const defaultTopic = 'TOPIC';
    const [selectedTopic, setSelectedTopic] = useState(defaultTopic);

    const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
        onTopicChange(selectedTopic);
    };

    return (
        <div className="SP1dropdown">
            <span>{selectedTopic}</span>
            <div className="SP1dropdown-content">
                <p onClick={() => handleTopicChange('TOPIC #1')} style={{ cursor: 'pointer' }}>
                    TOPIC #1
                </p>
                <p onClick={() => handleTopicChange('TOPIC #2')} style={{ cursor: 'pointer' }}>
                    TOPIC #2
                </p>
                <p onClick={() => handleTopicChange('TOPIC #3')} style={{ cursor: 'pointer' }}>
                    TOPIC #3
                </p>
            </div>
            <div className="SP1arrow-down"></div>
        </div>
    );
}

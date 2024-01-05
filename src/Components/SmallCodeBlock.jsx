import React, { useState } from 'react';
import './CodeBlock.css'; // Import the CSS file for styling

const CodeBlock = ({ code }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const code1Style = {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '-5px',
    borderRadius: '5px',
    height: '100px',
    marginBottom: '10px',
    overflowY: 'auto',
    width: '100%',
    color: 'white',
  };

  const code2Style = {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '-5px',
    borderRadius: '5px',
    marginBottom: '10px',
    overflowY: 'auto',
    minWidth: '100%',
    color: 'white',
    minHeight: '100px',
    height: 'max-content',
  };

  const appliedStyle = isClicked ? code2Style : code1Style;

  return (
    <pre className="smallCode" style={appliedStyle} onClick={handleClick}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;

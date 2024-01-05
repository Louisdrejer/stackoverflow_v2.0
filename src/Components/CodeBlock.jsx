import React, { useState } from 'react';
import './CodeBlock.css'; // Import the CSS file for styling

const CodeBlock = ({ code }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const code1Style = {
    minWidth: 'calc(100% - 5px)',
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '-5px',
    borderRadius: '5px',
    height: '100px',
    marginBottom: '10px',
    overflowY: 'auto',
    color: 'white',
  };

  const code2Style = {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '-5px',
    borderRadius: '5px',
    marginBottom: '10px',
    overflowY: 'auto',
    color: 'white',
    height: 'max-content',
  };

  const appliedStyle = isClicked ? code2Style : code1Style;

  return (
    <pre className="code" style={appliedStyle} onClick={handleClick}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;

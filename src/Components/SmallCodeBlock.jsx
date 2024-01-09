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
    paddingBottom: '5px',
    background: 'rgb(67, 68, 73)',
    borderRadius: '5px',
    height: '100px',
    marginBottom: '2px',
    overflowY: 'auto',
    minWidth: '100%',
    color: 'white',
    maxWidth: '810px'
  };

  const code2Style = {
    paddingTop: '5px',
    background: 'rgb(67, 68, 73)',
    paddingLeft: '5px',
    paddingBottom: '5px',
    borderRadius: '5px',
    marginBottom: '2px',
    overflowY: 'auto',
    minWidth: '100%',
    color: 'white',
    minHeight: '100px',
    height: 'max-content',
    maxWidth: '810px'
  };



  const appliedStyle = isClicked ? code2Style : code1Style;

  return (
    <pre className="smallCode" style={appliedStyle} onClick={handleClick}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;

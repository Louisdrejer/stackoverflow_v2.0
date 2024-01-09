import React, { useState } from 'react';
import './CodeBlock.css';
import { useLocation } from 'react-router-dom';

const CodeBlock = ({ code }) => {
  const location = useLocation();
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const code1Style = {
    minWidth: '100%',
    background: 'rgb(67, 68, 73)',
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '5px',
    borderRadius: '5px',
    height: '100px',
    marginBottom: '2px',
    overflowY: 'auto',
    color: 'white',
    maxWidth: '1000px'
    
  };


  const code2Style = {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '5px',
    background: 'rgb(67, 68, 73)',
    borderRadius: '5px',
    marginBottom: '2px',
    overflowY: 'auto',
    color: 'white',
    minHeight: '100px',
    height: 'max-content',
    maxWidth: '1000px',
    minWidth: '100%',
  };

  const code3Style = {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '5px',
    background: 'rgb(67, 68, 73)',
    borderRadius: '5px',
    marginBottom: '2px',
    overflowY: 'auto',
    color: 'white',
    cursor: 'auto',
    maxWidth: '1000px',
    height: 'fit-content',
    maxHeight: '245px',
    minHeight:'80px'
  };

  const appliedStyle = isClicked ? code2Style : code1Style;

  return (
    location.pathname === '/Answers' || location.pathname === '/Answers/' ? (
      <pre className="code" style={code3Style} onClick={handleClick}>
        <code>{code}</code>
      </pre>
    ) : (
      <pre className="code" style={appliedStyle} onClick={handleClick}>
        <code>{code}</code>
      </pre>
    )
  );
};

export default CodeBlock;

import React from 'react';
import './CodeBlock.css'; // Import the CSS file for styling

const CodeBlock = ({ code }) => {
  return (
    <pre className="smallCode">
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
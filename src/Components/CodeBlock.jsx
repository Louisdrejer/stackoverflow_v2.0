import React from 'react';
import './CodeBlock.css'; // Import the CSS file for styling

const CodeBlock = ({ code }) => {
  return (
    <pre className="code">
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
import React, { useState } from 'react';
import './CodeBlock.css'; 
const CodeInput = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-input-container">
      <textarea
        className="code-input"
        placeholder="Enter your code here..."
        value={code}
        onChange={handleChange}
      />
      <div className="code-output">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeInput;

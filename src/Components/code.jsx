import React, { useState, useEffect } from 'react';

const CodeInput = () => {
  const [code, setCode] = useState('');

  // Apply Prism syntax highlighting on component mount and when code changes
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
      />
    </div>
  );
};

export default CodeInput;
import React, { useState } from 'react';
import { IoFlagOutline, IoFlag } from 'react-icons/io5';

export default function Flag() {
  const [isFlagClicked, setFlagClicked] = useState(false);

  const handleClick = () => {
    setFlagClicked(!isFlagClicked);
  };

  const flagStyle = {
    color: isFlagClicked ? 'red' : 'inherit',
    cursor: 'pointer',
  };

  return (
    <div onClick={handleClick} style={flagStyle} title="Report disrespectful comment">
      {isFlagClicked ? <IoFlag /> : <IoFlagOutline />}
    </div>
  );
}

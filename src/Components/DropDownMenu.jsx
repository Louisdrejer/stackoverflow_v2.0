// DropdownMenu.jsx
import React, { useState } from 'react';

const NestedDropdown = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="nested-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>Open Nested Dropdown {index}</p>
      {isOpen && (
        <div className="nested-dropdown-content">
            <div>
          <p>Nested Item 1</p>
          <p>Nested Item 2</p>
          <p>Nested Item 3</p>
          
        </div>
      )}
    </div>
  );
};

const DropdownMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
      <button>Open Dropdown</button>
      <NestedDropdown index={1} onMouseEnter={() => handleMouseEnter(1)} />
      <NestedDropdown index={2} onMouseEnter={() => handleMouseEnter(2)} />
      <NestedDropdown index={3} onMouseEnter={() => handleMouseEnter(3)} />
      {/* Add more NestedDropdown components as needed */}
    </div>
  );
};

export default DropdownMenu;

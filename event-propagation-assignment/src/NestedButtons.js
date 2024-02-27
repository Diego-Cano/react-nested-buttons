// NestedButtons.js
import React from 'react';
import './NestedButtons.css';

const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('Outer button clicked!');
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); // Stops the event from propagating to the outer button
    alert('Inner button clicked!');
  };

  return (
    <div className="nested-buttons-container">
      <button onClick={handleOuterClick} className="outer-button">
        Outer Button
        <button onClick={handleInnerClick} className="inner-button">
          Inner Button
        </button>
      </button>
    </div>
  );
};

export default NestedButtons;

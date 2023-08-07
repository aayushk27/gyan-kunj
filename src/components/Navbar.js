import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // const [buttonColor, setButtonColor] = useState('red');

  // const handleButtonClick = () => {
  //   setButtonColor(buttonColor === 'red' ? 'green' : 'red');
  // };

  const [circleColor, setCircleColor] = useState('red');

  const handleButtonClick = () => {
    setCircleColor(circleColor === 'red' ? 'green' : 'red');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <span className="temp-name">Logo</span>
          <a href="#home">Function 1</a>
          <a href="#about">Function 2</a>
          <a href="#contact">Function 3</a>
        </div>
        <div className="navbar-right">
          {/* Additional elements can be added to the right if needed */}
          <button className="color-button" onClick={handleButtonClick}>
            <div
              className="inner-circle"
              style={{ backgroundColor: circleColor }}
            />
            <span className="circle-text">
              {circleColor === 'red' ? 'Not Connected' : 'Connected'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

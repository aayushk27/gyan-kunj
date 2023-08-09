import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import $ from 'jquery';

const Home = () => {
  const [circleColor, setCircleColor] = useState('red');

  const handleButtonClick = () => {
    setCircleColor(circleColor === 'red' ? 'green' : 'red');
  };

  return (
    <div>
      <div className="heading">
        <h1 className="webheading">Gyaan Kunj</h1>
      </div>
      <div>
        <div id="includeContent"></div>
      </div>
      <div className="top-right-button">
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
      <div className="maincards">
        <div className="cards card1">
          <div className="image">
            <img src="images/user1.png" alt="user1" />
          </div>
          <div className="title">
            <h1>User</h1>
          </div>
          <div className="des">
            <button className="loginButton">
              <Link to="/login">Login</Link>
            </button>
            <button className="loginButton">
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
        </div>
        {/* <div className="cards card2">
          <div className="image">
            <img src="/images/ins1.png" alt="ins1" />
          </div>
          <div className="title">
            <h1>Institution</h1>
          </div>
          <div className="des">
            <button className="loginButton">
              <Link to="/login">Login</Link>
            </button>
            <button className="loginButton">
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Home;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import $ from 'jquery';

const Home = () => {
  // useEffect(() => {
  //   const fetchAnimation = async () => {
  //     try {
  //       const response = await fetch('anim.html');
  //       const data = await response.text();
  //       const includedContentElement =
  //         document.querySelector('#includedContent');
  //       if (includedContentElement) {
  //         includedContentElement.innerHTML = data;
  //       }
  //     } catch (error) {
  //       console.error('Error loading animation:', error);
  //     }
  //   };

  //   fetchAnimation();
  // }, []);
  useEffect(() => {
    $('#includedContent').load('anim.html');

    // You can also add any other jQuery functionality here if needed
  }, []);

  return (
    <div>
      <div className="heading">
        <h1 className="webheading">Gyaan Kunj</h1>
      </div>
      <div>
        <div id="includeContent"></div>
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
            {/* <button>
              <a href="/#">Login</a>
            </button>
            <button>
              <a href="/#">SignUp</a>
            </button> */}
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
        </div>
        <div className="cards card2">
          <div className="image">
            <img src="/images/ins1.png" alt="ins1" />
          </div>
          <div className="title">
            <h1>Institution</h1>
          </div>
          <div className="des">
            {/* <button>
              <a href="/#">Login</a>
            </button>
            <button>
              <a href="/#">SignUp</a>
            </button> */}
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

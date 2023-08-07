import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; Copyright {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

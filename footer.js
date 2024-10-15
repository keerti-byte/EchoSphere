import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="/terms" className="footer-link">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </li>
          <li>
            <a href="/contact" className="footer-link">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StreamNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

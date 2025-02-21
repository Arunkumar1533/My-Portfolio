import React from 'react';
import './footer.css'; // Import the CSS file
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Twitter from '../assets/Twitter.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-links">
        <a href="https://github.com/Arunkumar1533" className="footer__social-link">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
            alt="GitHub" className="footer__social-link-icon" />
        </a>
        <a href="https://www.instagram.com/arun.x.ak?igsh=MWJweDVkaG5qbG9odw==" className="footer__social-link">
          <img src={instagram} alt="Instagram" className="footer__social-link-icon" />
        </a>
        <a href="#" className="footer__social-link">
          <img src={Twitter} alt="Twitter" className="footer__social-link-icon" />
        </a>
        <a href="https://www.linkedin.com/in/arunkumar-g-510740281/" className="footer__social-link">
          <img
            src={linkedin}
            alt="LinkedIn" className="footer__social-link-icon" />
        </a>
      </div>
      <p>&copy; 2025 ARUNKUMAR All rights reserved.</p>
    </footer>
  );
};

export default Footer;
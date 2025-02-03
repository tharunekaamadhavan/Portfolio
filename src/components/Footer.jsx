import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHackerrank,FaInstagram} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Let's Connect!</h3>
        <div className="social-links">
          <a href="mailto:tharunekaa@outlook.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tharunekaa-madhavan-801469231/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/tharunekaamadhavan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.hackerrank.com/tharunekaa" target="_blank" rel="noopener noreferrer">
            <FaHackerrank className="icon" />
          </a>
          <a href="https://www.instagram.com/magnatharu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
        <p>© 2024 Tharunekaa Madhavan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

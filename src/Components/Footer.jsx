import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>
            <b>Contact</b>
          </h4>
          <p>Email: &nbsp;&nbsp; abc@example.com</p>
          <p>Phone: &nbsp;+123 456 7890</p>
        </div>
        <div className="footer-section social-media">
          <h4>
            <b>Follow Us</b>
          </h4>
          <ul>
            <li>
              <Link
                to="https://www.linkedin.com/in/aimen-iqbal-64b384303/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                style={{ color: '#333', textDecoration: 'none' }} // Dark color
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="https://github.com/" target="_blank"
              style={{ color: '#333', textDecoration: 'none' }}>
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
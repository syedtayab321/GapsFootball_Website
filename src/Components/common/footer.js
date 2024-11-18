import React from "react";
import "./../../css/common/footer.css";
import logo from "./../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo and Info */}
        <div className="footer-logo">
          <img src={logo} alt="GAPS Football" className="footer-logo-img" />
          <p className="footer-description">
            GAPS Football is dedicated to providing top-tier training, league management, and player statistics to all football enthusiasts.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h4 className="footer-section-title">Stay Updated</h4>
          <p>Subscribe to our newsletter to receive the latest updates and news about football training, leagues, and more.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="btn btn-golden">Subscribe</button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4 className="footer-section-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GAPS Football. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

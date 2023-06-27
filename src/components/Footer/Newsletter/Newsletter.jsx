import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/shaileshgoswami8462866771sg/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/shailesh.goswami.5891", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/shailesh5816/", "_blank");
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">
          Sign up for latest updates and offers
        </span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <div className="icon" onClick={handleLinkedinClick}>
            <FaLinkedinIn size={14} />
          </div>
          <div className="icon" onClick={handleFacebookClick}>
            <FaFacebookF size={14} />
          </div>
          <div className="icon" onClick={handleInstagramClick}>
            <FaInstagram size={14} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;

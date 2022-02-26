import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="body-contact">
      <div className="contact-section">
        <h2 className="contact-title">Travel Guides By Soi 55</h2>
        <p>
          <a
            href="mailto:hello@soi55lifestyle.com"
            alt="email-address"
            className="social-link"
          >
            hello@soi55lifestyle.com
          </a>
        </p>
        <h2 className="contact-title">let's connect</h2>
        <a
          href="https://github.com/CandiceTomkins"
          alt="GitHub"
          className="social-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/candice-tomkins-3b2129102"
          alt="linkedin-link"
          className="social-link"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/soi55lifestyle"
          alt="instagram-link"
          className="social-link"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

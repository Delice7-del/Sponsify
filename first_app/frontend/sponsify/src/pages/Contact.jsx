import React from "react";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact__hero">
        <span className="label">Get in Touch</span>
        <h1>LET'S START A <br /><span className="italic-serif">CONVERSATION.</span></h1>
        <p className="hero-text">
          Have questions about sponsorship? Want to learn more about our mission? 
          Our team is here to help you every step of the way.
        </p>
      </section>

      <div className="contact__grid">
        <div className="contact-card">
          <div className="contact-icon"><Mail size={32} /></div>
          <h3>EMAIL US</h3>
          <p>support@oursponsorship.org</p>
          <a href="mailto:support@oursponsorship.org" className="contact-link">Send Message →</a>
        </div>
        <div className="contact-card">
          <div className="contact-icon"><Phone size={32} /></div>
          <h3>CALL US</h3>
          <p>+123 456 7890</p>
          <a href="tel:+1234567890" className="contact-link">Call Direct →</a>
        </div>
        <div className="contact-card">
          <div className="contact-icon"><MapPin size={32} /></div>
          <h3>VISIT US</h3>
          <p>123 Hope Street, City, Country</p>
          <button className="contact-link">View Map →</button>
        </div>
      </div>

      <section className="contact__socials">
        <div className="socials-content">
          <div className="social-icon"><Share2 size={24} /></div>
          <h3>FOLLOW OUR JOURNEY</h3>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link"><FaFacebook size={20} /> <span>Facebook</span></a>
            <a href="https://twitter.com" className="social-link"><FaTwitter size={20} /> <span>Twitter</span></a>
            <a href="https://instagram.com" className="social-link"><FaInstagram size={20} /> <span>Instagram</span></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

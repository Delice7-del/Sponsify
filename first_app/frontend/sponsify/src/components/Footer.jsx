import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link to="/">
            <ShieldCheck size={28} color="rgba(0, 209, 255, 0.8)" strokeWidth={2.5} style={{ marginBottom: '10px' }} />
            <span>Sponsify</span>
          </Link>
        </div>

        <div className="footer__links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/sponsorship">Sponsor a Child</Link>
        </div>

        <div className="footer__info">
          <p>&copy; {new Date().getFullYear()} Sponsify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

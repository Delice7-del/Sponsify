import React from "react";
import { Link } from "react-router-dom";
import { Target, Users, Heart } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about__hero">
        <span className="label">Our Mission</span>
        <h1>EMPOWERING THE <br /><span className="italic-serif">NEXT GENERATION.</span></h1>
        <p className="hero-text">
          Sponsify is a global platform dedicated to bridging the gap between compassionate sponsors 
          and children who need a helping hand to reach their full potential.
        </p>
      </section>

      <div className="about__goals">
        <div className="goal-card">
          <div className="goal-icon"><Target size={32} /></div>
          <h3>DIRECT IMPACT</h3>
          <p>We ensure that 100% of your sponsorship reaches the child's needs directly, with transparent reporting.</p>
        </div>
        <div className="goal-card">
          <div className="goal-icon"><Users size={32} /></div>
          <h3>COMMUNITY FIRST</h3>
          <p>We work with local leaders to build sustainable support systems around every sponsored child.</p>
        </div>
        <div className="goal-card">
          <div className="goal-icon"><Heart size={32} /></div>
          <h3>HOLISTIC CARE</h3>
          <p>From education to healthcare and emotional support, we care for the whole child.</p>
        </div>
      </div>

      <section className="about__cta">
        <h2>READY TO MAKE A <span className="highlight">DIFFERENCE?</span></h2>
        <div className="cta-actions">
          <Link to="/sponsorship" className="btn-primary">Become a Sponsor →</Link>
          <Link to="/contact" className="btn-outline">Talk to Us</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

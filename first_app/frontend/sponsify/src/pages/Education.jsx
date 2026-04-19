import React from "react";
import { GraduationCap, BookOpen, Trophy, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css"; // Reuse About.css for consistency

const Education = () => {
  return (
    <div className="about-container">
      <section className="about__hero">
        <span className="label">Our Foundation</span>
        <div className="hero-icon">
          <GraduationCap size={48} color="var(--accent)" strokeWidth={1.5} />
        </div>
        <h1>EDUCATION <br /><span className="italic-serif">FIRST.</span></h1>
        <p className="hero-text">
          We believe that education is the most powerful tool for breaking the cycle of poverty. 
          Our educational programs are designed to provide every child with the resources 
          they need to excel and dream big.
        </p>
      </section>

      <div className="about__grid">
        <div className="about-card">
          <div className="about-icon"><BookOpen size={32} /></div>
          <h3>QUALITY SCHOOLING</h3>
          <p>We partner with top local schools to ensure children receive a high-standard education that prepares them for a competitive future.</p>
        </div>
        <div className="about-card">
          <div className="about-icon"><Trophy size={32} /></div>
          <h3>LEARNING MATERIALS</h3>
          <p>Every sponsored child receives all necessary books, uniforms, and digital tools to support their academic journey without financial strain.</p>
        </div>
        <div className="about-card">
          <div className="about-icon"><Users size={32} /></div>
          <h3>SKILL DEVELOPMENT</h3>
          <p>Beyond the classroom, we offer workshops in coding, arts, and leadership to foster well-rounded development and creativity.</p>
        </div>
      </div>

      <section className="about__mission" style={{ marginTop: '4rem' }}>
        <div className="mission-content">
          <div className="about-icon"><CheckCircle size={32} /></div>
          <h3>THE SCHOLARSHIP PIPELINE</h3>
          <p>
            Our transparency is unmatched. Sponsors receive termly report cards and personal updates 
            from their children, ensuring you see the direct impact of your investment in their 
            educational growth. We track performance metrics to ensure no child is left behind.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/sponsorship" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Find a Scholar →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

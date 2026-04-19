import React, { useEffect, useState } from "react";
import ChildCard from "../pages/ChildCard";
import "./Sponsorship.css";
import child1 from '../assets/child1.png';
import child2 from '../assets/child2.png';
import child3 from '../assets/child3.png';
import child4 from '../assets/child4.png';
import child5 from '../assets/child5.png';
import child6 from '../assets/child6.png';
import child7 from '../assets/child7.png';
import child8 from '../assets/child8.png';

const Sponsorship = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const sampleChildren = [
      { id: 1, name: "Daniel", age: 8, country: "Rwanda", image: child1, description: "Daniel loves school and dreams of becoming a doctor." },
      { id: 2, name: "Amina", age: 10, country: "Kenya", image: child2, description: "Amina enjoys reading and wants to be a teacher." },
      { id: 3, name: "Musa", age: 7, country: "Uganda", image: child3, description: "Musa is creative and dreams of being an artist." },
      { id: 4, name: "Sarah", age: 9, country: "Tanzania", image: child4, description: "Sarah loves mathematics and hopes to become an engineer." },
      { id: 5, name: "James", age: 11, country: "Ethiopia", image: child5, description: "James is passionate about sports and helping others." },
      { id: 6, name: "Fatima", age: 6, country: "Somalia", image: child6, description: "Fatima enjoys singing and dreams of becoming a teacher." },
      { id: 7, name: "Hassan", age: 9, country: "Sudan", image: child7, description: "Hassan loves playing football and wants to become a professional athlete." },
      { id: 8, name: "Grace", age: 7, country: "Malawi", image: child8, description: "Grace enjoys drawing and has a dream of becoming an artist." }
    ];
    setChildren(sampleChildren);
  }, []);

  return (
    <div className="sponsorship-container">
      <section className="sponsorship__hero">
        <span className="label">Profiles</span>
        <h1>CHOOSE A LIFE TO <br /><span className="italic-serif">TRANSFORM.</span></h1>
        <p className="hero-text">
          Browse the profiles below and find a child whose story speaks to you. 
          Your sponsorship provides more than just essentials; it provides a future.
        </p>
      </section>

      <div className="sponsorship__content">
        {children.length === 0 ? (
          <div className="no-children-message">
            <p>No children available at the moment. Please check back soon.</p>
          </div>
        ) : (
          <div className="sponsorship__grid">
            {children.map((child) => (
              <ChildCard key={child.id} child={child} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sponsorship;

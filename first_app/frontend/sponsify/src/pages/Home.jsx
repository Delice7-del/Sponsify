import React from "react";
import { Link } from "react-router-dom";
import child1 from '../assets/child1.png';
import child2 from '../assets/child2.png';
import "./Home.css";

const Home = () => {
  const featuredChildren = [
    {
      id: 1,
      name: "Daniel",
      age: 8,
      country: "Rwanda",
      image: child1,
      description: "Daniel loves school and dreams of becoming a doctor.",
    },
    {
      id: 2,
      name: "Amina",
      age: 10,
      country: "Kenya",
      image: child2,
      description: "Amina enjoys reading and wants to be a teacher.",
    },
  ];

  return (
    <div className="home">
      <div className="home__hero">
        <h1>Make a Difference Today</h1>
        <p>Join us in giving hope to children in need through sponsorship.</p>
        <Link to="/sponsorship" className="home__cta">
          Sponsor a Child
        </Link>
      </div>

      <section className="home__about">
        <h2>What is Sponsify?</h2>
        <p>
          Sponsify is a platform that connects compassionate sponsors with children who need help with education, healthcare, and daily needs.
        </p>
        <Link to="/about" className="home__link">
          Learn More About Us
        </Link>
      </section>

      <section className="home__impact">
        <h2>Why Sponsor?</h2>
        <ul>
          <li>Support a child's education</li>
          <li>Provide daily necessities</li>
          <li>Change lives with small monthly donations</li>
        </ul>
      </section>

      <section className="home__featured-children">
        <h2>Children Waiting for Sponsorship</h2>
        <p className="featured-description">
          Meet some of the children who are waiting for a caring sponsor like you.
        </p>
        <div className="featured-children-grid">
          {featuredChildren.map((child) => (
            <div key={child.id} className="featured-child-card">
              <div className="featured-child-image">
                <img src={child.image} alt={`${child.name}'s photo`} />
              </div>
              <div className="featured-child-info">
                <h3>{child.name}, {child.age}</h3>
                <p className="child-location">{child.country}</p>
                <p className="child-description">{child.description}</p>
                <Link 
                  to={`/sponsor-form/${child.id}`} 
                  state={{ 
                    childName: child.name,
                    childAge: child.age,
                    childCountry: child.country,
                    childImage: child.image
                  }}
                  className="sponsor-button"
                >
                  Sponsor {child.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <Link to="/sponsorship" className="view-more-button">
            View More Children
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

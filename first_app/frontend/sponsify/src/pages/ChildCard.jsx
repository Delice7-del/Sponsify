// src/components/ChildCard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addToFavorites, removeFromFavorites, isChildFavorited } from "../utils/favorites";
import "./ChildCard.css";
import child1 from '../assets/child1.png';
import child2 from '../assets/child2.png';

import child3 from '../assets/child3.png';

const ChildCard = ({ child }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(isChildFavorited(child.id));
  }, [child.id]);

  const handleSponsorClick = () => {
    navigate(`/sponsor-form/${child.id}`, { 
      state: { 
        childName: child.name,
        childAge: child.age,
        childCountry: child.country,
        childImage: child.image
      } 
    });
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(child.id);
    } else {
      addToFavorites(child);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="child-card">
      <div className="child-image-container">
        <img
          src={child.image}
          alt={`${child.name}'s photo`}
          className="child-photo"
        />
        <button 
          onClick={handleFavoriteClick}
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      
      <div className="child-info">
        <h3>{child.name}</h3>
        <p>Age: {child.age}</p>
        <p>Country: {child.country}</p>
        <p>{child.description}</p>
        <div className="card-buttons">
          <button onClick={handleSponsorClick} className="sponsor-button">
            Sponsor {child.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;

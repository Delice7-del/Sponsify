import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, MapPin, User, ShieldCheck } from "lucide-react";
import { addToFavorites, removeFromFavorites, isChildFavorited } from "../utils/favorites";
import "./ChildCard.css";

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

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(child.id);
    } else {
      addToFavorites(child);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="child-tech-card">
      <div className="tech-card__header">
        <span className="status-dot"></span>
        <span>ID: {child.id}00{child.id}</span>
        <span className="tech-badge">VERIFIED</span>
        <button 
          onClick={handleFavoriteClick}
          className={`tech-favorite-btn ${isFavorite ? 'active' : ''}`}
        >
          <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="tech-card__body">
        <div className="child-image-container">
          <img
            src={child.image}
            alt={`${child.name}'s photo`}
            className="tech-image"
          />
        </div>
        
        <div className="child-details">
          <div className="detail-row">
            <span className="detail-label"><User size={12} /> NAME</span>
            <span className="detail-value">{child.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label"><MapPin size={12} /> LOCATION</span>
            <span className="detail-value">{child.country}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label"><ShieldCheck size={12} /> AGE</span>
            <span className="detail-value">{child.age} YRS</span>
          </div>
          <p className="tech-description">{child.description}</p>
        </div>
      </div>
      
      <div className="tech-card__footer">
        <button onClick={handleSponsorClick} className="tech-sponsor-btn">
          SPONSOR {child.name.toUpperCase()} →
        </button>
      </div>
    </div>
  );
};

export default ChildCard;

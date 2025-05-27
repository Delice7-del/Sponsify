
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChildCard from "./ChildCard";
import './Children.css';

const ChildList = () => {
  const [children, setChildren] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const res = await axios.get("/api/children");
       
        if (Array.isArray(res.data)) {
          setChildren(res.data);
        } else {
          setError("Invalid data format received.");
          setChildren([]);
        }
      } catch (err) {
        console.error("Failed to load children:", err);
        setError("Failed to load children.");
        setChildren([]);
      }
    };

    fetchChildren();
  }, []);

  if (error) {
    return <div className="child-list-container"><p>{error}</p></div>;
  }

  return (
    <div className="child-list-container">
      <h2>Meet the Children Waiting for Sponsorship</h2>
      <div className="child-card-grid">
        {children.length === 0 ? (
          <p>No children available for sponsorship at the moment.</p>
        ) : (
          children.map((child) => (
            <ChildCard key={child._id} child={child} />
          ))
        )}
      </div>
    </div>
  );
};

export default ChildList;

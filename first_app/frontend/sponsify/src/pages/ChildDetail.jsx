// src/pages/ChildDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ChildDetail.css";

const ChildDetail = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const res = await axios.get(`/api/children/${id}`);
        setChild(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch child data", err);
        setLoading(false);
      }
    };
    fetchChild();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!child) return <p>Child not found.</p>;

  return (
    <div className="child-detail">
      <img
        src={child.photo || "/images/default-child.jpg"}
        alt={child.name}
        className="child-detail__image"
      />
      <div className="child-detail__info">
        <h1>{child.name}</h1>
        <p><strong>Age:</strong> {child.age}</p>
        <p><strong>Location:</strong> {child.location}</p>
        <p>{child.story}</p>
        <Link to={`/sponsorship?childId=${child._id}`} className="btn btn-primary">
          Sponsor {child.name}
        </Link>
      </div>
    </div>
  );
};

export default ChildDetail;

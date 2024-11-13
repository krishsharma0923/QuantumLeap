import React from 'react';
import './HomeLanding.css';




const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard

import React from 'react';
import './mission.css';  

const MissionCard = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MissionCard;

import React from 'react';
import './HomeLanding.css'; 

const PlanetCard = ({ imgSrc, name, description }) => {
  return (
    <div className="solar-planet-member">
      <div className="planet-img">
        <img src={imgSrc} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="button-style planet-btn">Know More</button>
    </div>
  );
};

export default PlanetCard;

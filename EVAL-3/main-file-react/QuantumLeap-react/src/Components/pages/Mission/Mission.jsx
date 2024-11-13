import React from 'react';
import MissionCard from './MissionCard';
import './mission.css';

const Mission = () => {
  const missions = [
    { imgSrc: './missions/nasa.jpg', title: 'Artemis II', description: 'Four astronauts will venture around the Moon on Artemis II, the first crewed mission on NASA\'s path to establishing a long-term presence at the Moon for science and exploration.' },
    { imgSrc: './missions/nasa2.jpg', title: 'Commercial Crew', description: 'NASA’s Commercial Crew Program is delivering on its goal of safe, reliable, and cost-effective human transportation to and from the International Space Station.' },
    { imgSrc: './missions/nasa3.jpg', title: 'Hubble Space Telescope', description: 'Since its 1990 launch, the Hubble Space Telescope has changed our fundamental understanding of the universe.' },
    { imgSrc: './missions/nasa4.jpg', title: 'James Webb Space Telescope', description: 'Webb is the premier observatory of the next decade, serving thousands of astronomers worldwide. It studies every phase in the history of our Universe.' },
    { imgSrc: './missions/nasa5.jpg', title: 'Juno: Mission At Jupiter', description: 'Probing beneath Jupiter\'s dense clouds to answer questions about the origin and evolution of Jupiter, our solar system, and giant planets across the cosmos.' },
    { imgSrc: './missions/nasa6.jpg', title: 'International Space Station', description: 'The International Space Station Program brings together international flight crews, multiple launch vehicles, the international scientific research community, and much more.' },
    { imgSrc: './missions/nasa7.jpg', title: 'Perseverance Mars Rover', description: 'This rover and its aerial sidekick were assigned to study the geology of Mars and much more.' },
    { imgSrc: './missions/nasa8.jpg', title: 'Parker Solar Probe', description: 'On a mission to “touch the Sun,” NASA\'s Parker Solar Probe became the first spacecraft to fly through the corona – the Sun’s upper atmosphere.' },
    { imgSrc: './missions/nasa9.jpg', title: 'Quesst', description: 'NASA\'s mission to demonstrate how the X-59 can fly supersonic without generating loud sonic booms.' },
    { imgSrc: './missions/nasa10.jpg', title: 'Low-Earth Orbit Flight Test of an Inflatable Decelerator', description: 'NASA’s Low-Earth Orbit Flight Test of an Inflatable Decelerator, or LOFTID, is demonstrating a cross-cutting aeroshell for atmospheric re-entry.' },
  ];

  return (
    <div>
      <section className="sub-header">
        <h1>Missions</h1>
        <p>Exploring the secrets of the universe for the benefit of all. NASA investigates the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.</p>
      </section>

      <div className="card-container">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            imgSrc={mission.imgSrc}
            title={mission.title}
            description={mission.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Mission;

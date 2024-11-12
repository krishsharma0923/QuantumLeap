import React from 'react';
import './mission.css'; // Make sure the CSS is linked correctly

const Mission = () => {
  return (
    <div>
      {/* Sub-header Section */}
      <section className="sub-header">
        <h1>Missions</h1>
        <p>Exploring the secrets of the universe for the benefit of all. NASA investigates the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.</p>
      </section>

      {/* Card Container */}
      <div className="card-container">
        <div className="card">
          <img src="./missions/nasa.jpg" alt="Artemis II" />
          <div className="card-content">
            <h2>Artemis II</h2>
            <p>Four astronauts will venture around the Moon on Artemis II, the first crewed mission on NASA's path to establishing a long-term presence at the Moon for science and exploration.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa2.jpg" alt="Commercial Crew" />
          <div className="card-content">
            <h2>Commercial Crew</h2>
            <p>NASA’s Commercial Crew Program is delivering on its goal of safe, reliable, and cost-effective human transportation to and from the International Space Station.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa3.jpg" alt="Hubble Space Telescope" />
          <div className="card-content">
            <h2>Hubble Space Telescope</h2>
            <p>Since its 1990 launch, the Hubble Space Telescope has changed our fundamental understanding of the universe.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa4.jpg" alt="James Webb Space Telescope" />
          <div className="card-content">
            <h2>James Webb Space Telescope</h2>
            <p>Webb is the premier observatory of the next decade, serving thousands of astronomers worldwide. It studies every phase in the history of our Universe.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa5.jpg" alt="Juno: Mission At Jupiter" />
          <div className="card-content">
            <h2>Juno: Mission At Jupiter</h2>
            <p>Probing beneath Jupiter's dense clouds to answer questions about the origin and evolution of Jupiter, our solar system, and giant planets across the cosmos.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa6.jpg" alt="International Space Station" />
          <div className="card-content">
            <h2>International Space Station</h2>
            <p>The International Space Station Program brings together international flight crews, multiple launch vehicles, the international scientific research community, and much more.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa7.jpg" alt="Perseverance Mars Rover" />
          <div className="card-content">
            <h2>Perseverance Mars Rover</h2>
            <p>This rover and its aerial sidekick were assigned to study the geology of Mars and much more.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa8.jpg" alt="Parker Solar Probe" />
          <div className="card-content">
            <h2>Parker Solar Probe</h2>
            <p>On a mission to “touch the Sun,” NASA's Parker Solar Probe became the first spacecraft to fly through the corona – the Sun’s upper atmosphere.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa9.jpg" alt="Quesst" />
          <div className="card-content">
            <h2>Quesst</h2>
            <p>NASA's mission to demonstrate how the X-59 can fly supersonic without generating loud sonic booms.</p>
          </div>
        </div>

        <div className="card">
          <img src="./missions/nasa10.jpg" alt="Low-Earth Orbit Flight Test of an Inflatable Decelerator" />
          <div className="card-content">
            <h2>Low-Earth Orbit Flight Test of an Inflatable Decelerator</h2>
            <p>NASA’s Low-Earth Orbit Flight Test of an Inflatable Decelerator, or LOFTID, is demonstrating a cross-cutting aeroshell for atmospheric re-entry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

import React from 'react';
import './HomeLanding.css';
import PlanetCard from './PlanetCard';
import FeatureCard from './FeatureCard';


export const HomeLanding = () => {

  const planets = [
    { imgSrc: './planets/mercury.png', name: 'MERCURY', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
    { imgSrc: './planets/venus.png', name: 'VENUS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
    { imgSrc: './planets/earth.png', name: 'EARTH', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
    { imgSrc: './planets/mars.png', name: 'MARS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
    { imgSrc: './planets/jupiter.png', name: 'JUPITER', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
    { imgSrc: './planets/saturn.png', name: 'SATURN', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
    { imgSrc: './planets/uranus.png', name: 'URANUS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
    { imgSrc: './planets/neptune.png', name: 'NEPTUNE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.' },
  ];


  const features = [
    { title: 'Interactive Star Maps', description: 'Explore detailed and interactive maps of our galaxy, solar system, and beyond.' },
    { title: 'Mission Highlights and News', description: 'Stay informed with the latest news on space missions, scientific discoveries, and breakthroughs.' },
    { title: 'Educational Resources', description: 'Access a rich library of articles, videos, and tutorials designed for learners of all ages.' },
    { title: 'Virtual Tours and Simulations', description: 'Embark on virtual tours of iconic space missions and simulations of space phenomena.' },
    { title: 'Community Engagement', description: 'Join a vibrant community of space enthusiasts, scientists, and explorers.' },
  ];



  return (
    <>
      <section className="home-landing">
      <div className="landing">
        <img
          src="../public/home-page-images/Photos-images-space-wallpaper-HD.jpg"
          alt="Space background"
        />
        <div className="main-content">
          <div className="landing-text">
            <h1>Welcome to QuantumLeap</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi
              hic eligendi sed vel maiores quis enim magni alias repudiandae!
            </p>
            <button className="button-style join-us">Join With Us</button>
          </div>
          <div className="astro-img">
            <img
              className="astro"
              src="../public/home-page-images/slide-img.png"
              alt="Astronaut"
              style={{ width: '30vw' }}
            />
          </div>
        </div>
      </div>
    </section>


    <section className="get-to-know">
      <div className="get-to-know-content">
        <div className="get-to-know-text">
          <h1 className="h1-text get-to-know-h1-text">
            GET TO KNOW MORE ABOUT SPACE
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum rem
            non tempore nisi veritatis illo asperiores, doloribus aliquid.
            Voluptates vero maiores eius eaque dignissimos aliquam, veritatis
            voluptate quo sequi rerum
          </p>
          <button className="button-style get-to-know-btn">Learn More</button>
        </div>
        <div className="get-to-know-img">
          <img src="./public/home-page-images/about.png" alt="About Space" />
        </div>
      </div>
    </section>


    <section className="solar-planets">
        <div className="solar-text">
          <h1 className="h1-text solar-h1-text">SOLAR PLANETS SYSTEM</h1>
        </div>
        <div className="solar-planet-container">
          <div className="solar-planets-cards">
            {planets.map((planet, index) => (
              <PlanetCard key={index} imgSrc={planet.imgSrc} name={planet.name} description={planet.description} />
            ))}
          </div>
        </div>
      </section>



    <section className="features">
      <div className="feature-text">
        <h1 className="h1-text">FEATURES WE PROVIDE</h1>
      </div>
      <section id="explore" className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </section>
    </>
    
    
  );
};


export default HomeLanding
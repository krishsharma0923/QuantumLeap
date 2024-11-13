import React from 'react';
import './OurTeam.css';

const teamMembers = [
  {
    name: 'Krish Sharma',
    email: 'abcd123@gmail.com',
    image: './our-team-images/b188c6801ad1d71d3c962c6e4aa2d0cf.jpg',
  },
  {
    name: 'Pratham',
    email: 'efgh456@gmail.com',
    image: './our-team-images/b188c6801ad1d71d3c962c6e4aa2d0cf.jpg',
  },
  {
    name: 'Vinayak Dhar',
    email: 'ijkl789@gmail.com',
    image: './our-team-images/b188c6801ad1d71d3c962c6e4aa2d0cf.jpg',
  },
];

const OurTeam = () => (
  <div>
    <section className="sub-header">
      <h1>OUR TEAM</h1>
    </section>

    <section className="our-team">
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.image} alt={`${member.name}`} />
            <h2>{member.name}</h2>
            <h5><i>{member.email}</i></h5>
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        ))}
      </div>
      <div className="content">
        <h1>Meet Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officiis
          illum atque non! Culpa natus laudantium minus iure atque dolor quam
          aperiam exercitationem error quis esse cupiditate, unde recusandae
          libero?
        </p>
        <button className="contact-btn">Contact</button>
      </div>
    </section>
  </div>
);

export default OurTeam;

import React from 'react';
import './BlogsNews.css';

const blogData = [
  {
    imgSrc: './blogs&News-images/blog-01.jpg',
    title: 'HOW MANY GALAXIES ARE IN...',
    date: '29 Dec, 2024',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo, tempore aliquid ut voluptates unde impedit dolore doloribus debitis reiciendis.',
  },
  {
    imgSrc: './blogs&News-images/blog-02.jpg',
    title: 'CLOUDY WEATHER ON TITAN I...',
    date: '29 Dec, 2024',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo, tempore aliquid ut voluptates unde impedit dolore doloribus debitis reiciendis.',
  },
  {
    imgSrc: './blogs&News-images/blog-03.jpg',
    title: 'ROSETTA ARRIVES AT COME...',
    date: '29 Dec, 2024',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo, tempore aliquid ut voluptates unde impedit dolore doloribus debitis reiciendis.',
  },
  {
    imgSrc: './blogs&News-images/blog-04.jpg',
    title: 'LOREM IPSUM DOLOR SIT AM...',
    date: '29 Dec, 2024',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo, tempore aliquid ut voluptates unde impedit dolore doloribus debitis reiciendis.',
  },
  {
    imgSrc: './blogs&News-images/blog-05.jpg',
    title: 'Neowise Telescope Insigh...',
    date: '29 Dec, 2024',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo, tempore aliquid ut voluptates unde impedit dolore doloribus debitis reiciendis.',
  },
  {
    imgSrc: './blogs&News-images/blog-06.jpg',
    title: 'Space Odyssey Updates Bu...',
    date: '29 Dec, 2024',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo, tempore aliquid ut voluptates unde impedit dolore doloribus debitis reiciendis.',
  },
];

const BlogsCards = () => {
  return (
    <section className="blog-news-container">
    <div className="cards-container flex">
      {blogData.map((blog, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <img src={blog.imgSrc} alt={blog.title} />
          </div>
          <div className="card-content">
            <h3 className="news-title">{blog.title}</h3>
            <h6 className="news-source">{blog.date}</h6>
            <p className="description">{blog.description}</p>
            <button className="read-more">READ MORE</button>
          </div>
        </div>
      ))}
    </div>
      </section>
  );
};

export default BlogsCards;

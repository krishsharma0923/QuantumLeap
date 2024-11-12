import React, { useState, useEffect } from 'react';
import './BlogsNews.css';

const images = [
  './blogs&News-images/blog-01.jpg',
  './blogs&News-images/blog-02.jpg',
  './blogs&News-images/blog-03.jpg',
  './blogs&News-images/blog-04.jpg',
  './blogs&News-images/blog-05.jpg',
  './blogs&News-images/blog-06.jpg',
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const showSlide = (index) => {
    if (index >= images.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  return (
    <section className="slider">
      <div className="slides">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`image #${index + 1}`}
            className={`slide ${index === slideIndex ? 'displaySlide' : ''}`}
          />
        ))}
      </div>
      <button className="prev" onClick={() => showSlide(slideIndex - 1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => showSlide(slideIndex + 1)}>
        &#10095;
      </button>
    </section>
  );
};

export default Slider;

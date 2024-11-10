import React from 'react';
import './BlogsNews.css';
import Slider from './Slider';
import BlogsCards from './BlogsCards';

const BlogsNews = () => {
  return (
    <div>
      {/* Sub-header section */}
      <section className="sub-header">
        <h1>BLOGS & NEWS</h1>
      </section>

      {/* Search bar section */}
      <section className="container">
        <div className="search-bar-heading">
          <h2>Trendy Blogs & News</h2>
        </div>
        <div className="search-bar-content">
          <form action="">
            <input className="txt" type="text" placeholder="What are you looking for?" />
            <input className="btn" type="button" value="Search" />
          </form>
        </div>
      </section>

      {/* Image slider section */}
      <Slider />

      {/* Blog and news section */}
      <BlogsCards />
    </div>
  );
};

export default BlogsNews;

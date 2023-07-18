import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="blog_heroimg"></div>
      <div className="blog_bloglist"></div>
      <div className="blog_subscribe">
        <h3>Do you want to read more?</h3>
        <p>
          Subcribe to our blog notifications and let’s help you take your career
          to the next level
        </p>
        <div>
          <input type="text" className="blog_input" placeholder="Email"></input>
          <button className="blog_button" role="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

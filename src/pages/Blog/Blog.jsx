import React from "react";
import "./Blog.css";
import blog from "../../assets/images/blog/heroblog.png";
import { blogdata } from "./BlogData";

const Blog = () => {
  return (
    <div>
      <div className="blog_heroimg">
        <img src={blog} width="100%" />
      </div>
      <div className="blog_bloglist">
        <h3 className="blog_rekruit_blog">Rekruit's blog</h3>
        <div className="blog_card_container">
          {blogdata.map((post) => (
            <div key={post.id} className="blog_card">
              <div>
                <img src={post.photo} width="100%" />
              </div>
              <div className="blog_card_details">
                <h4 className="blog_title">{post.title}</h4>
                <p className="blog_content">{post.content}</p>
                <h4 className="blog_readmore">Read more</h4>
                <p className="blog_date">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blog_subscribe">
        <h3>Do you want to read more?</h3>
        <p>
          Subcribe to our blog notifications and let’s help you take your career
          to the next level
        </p>
        <div>
          <input type="text" className="blog_input" placeholder="Email"></input>
          <button className="blog_button" role="button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

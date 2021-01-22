import { useState, useEffect, useRef } from "react";
import Comments from "./Comments.jsx";
require("dotenv").config();

// show each blog post and respective comments

const Show = (props) => {
  const [blogPost, setBlogPost] = useState({});

  // INDEX / GET
  const getBlogPost = async () => {
    try {
      const res = await fetch(
        `https://sounding-board.herokuapp.com/blogzs/${props.match.params.id}`
      );
      const json = await res.json();
      setBlogPost(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogPost();
  }, []);

  return (
    <div className="show-container">
      <h2>{blogPost.title}</h2>
      <p>{blogPost.author}</p>
      <img src={blogPost.img} alt={blogPost.title} className="blog-post-img" />
      <p>{blogPost.content}</p>
      <Comments blogPost={blogPost} />
    </div>
  );
};

export default Show;

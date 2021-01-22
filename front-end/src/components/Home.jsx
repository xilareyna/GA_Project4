import { useState, useEffect, useRef } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Show from "./Show.jsx";
// Shows all of the blog posts
// Index
// Pass in returned get as props for Show

require("dotenv").config();

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  // INDEX / GET
  const getBlogPosts = async () => {
    try {
      const res = await fetch("https://sounding-board.herokuapp.com/blogzs");
      const json = await res.json();
      setBlogPosts(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <div className="blog-posts-container">
      {blogPosts
        ? blogPosts.map((el, index) => {
            return (
              <div className="blog-post-card">
                <Link className="nav-links-for-css" to={`/blogzs/${el.id}`}>
                  {el.title}
                </Link>
                {/* <h2 className="blog-post-title">{el.title}</h2> */}
                <h3 className="blog-post-author">By {el.author}</h3>
                <img src={el.img} alt={el.title} className="blog-post-img" />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Home;

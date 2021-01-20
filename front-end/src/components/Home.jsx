import { useState, useEffect, useRef } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Show from './Show.jsx'
// Shows all of the blog posts
// Index
// Pass in returned get as props for Show

require('dotenv').config();

const Home = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    // INDEX / GET
    const getBlogPosts = async () => {
        try {
            const res = await fetch('http://localhost:3000/blogzs');
            const json = await res.json();
            setBlogPosts(json);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getBlogPosts();
    }, [])

    return (
        <div className="blog-posts-container">
            {
                blogPosts ? blogPosts.map((el, index) => {
                    return (
                        <div className="blog-post-card">
                            <Link className="nav-links-for-css" to ={`/blogz/${index}`}>{el.title}</Link>
                            {/* <h2 className="blog-post-title">{el.title}</h2> */}
                            <h3 className="blog-post-author">By {el.author}</h3>
                            <img src={el.img} alt={el.title} className="blog-post-img"/>
                            <Route path = {`/blogz/${index}`}>
                                <Show
                                    title={el.title}
                                    author={el.author}
                                    content={el.content}
                                    img={el.img}
                                />
                            </Route>
                        </div>
                    )
                }) : ""
            }
        </div>
    )
}

export default Home;
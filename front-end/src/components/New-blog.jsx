import { useState, useEffect, useRef } from 'react';
// Create new blog post and the edit route
require('dotenv').config();

const NewBlog = () => {

    const [blogPost, setBlogPosts] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [imgInput, setImgInput] = useState("");

    // CREATE
    const createBlogPost = async (e, id) => {
        e.preventDefault();
        // let noteHolder = noteInput.current.value;
        let newBlogPost = JSON.stringify({
            title: titleInput,
            content: contentInput,
            author: authorInput,
            img: imgInput
        });
        e.currentTarget.reset();
        try {
            const response = await fetch('http://localhost:3000/blogzs', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: newBlogPost
            });
            const data = await response.json();
            let allBlogs = [...blogPost, data]
            // Please test this.
            // Can't remember what post returns 
            setBlogPosts(allBlogs);
            setContentInput("");
            setTitleInput("");
            setAuthorInput("");
            setImgInput("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h2>new blog</h2>
            <div className="create-new-blog-container">
                <form onSubmit={createBlogPost}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="blog-title-input" value={titleInput} onChange={(e) => setTitleInput(e.target.value)}/>
                    <label htmlFor="title">Author</label>
                    <input type="text" id="author" className="blog-author-input" value={authorInput} onChange={(e) => setAuthorInput(e.target.value)}/>
                    <label htmlFor="year">Content</label>
                    <input type="text" id="content" className="blog-content-input" value={contentInput} onChange={(e) => setContentInput(e.target.value)}/>
                    <label htmlFor="year">Image URL</label>
                    <input type="text" id="content" className="img-content-input" value={contentInput} onChange={(e) => setImgInput(e.target.value)}/>
                    <input type="submit" value="Post" className="blog-create-button"/>
                </form>
            </div>
        </>
    )
}

export default NewBlog;
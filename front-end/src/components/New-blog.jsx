import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "../App.css";
// Create new blog post and the edit route
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  blogPostButton: {
    border: "none",
    fontSize: "30px",
    backgroundColor: "darkorange",
    color: "white",
  },
  inputFields: {},
  h2: {
    textAlign: "center",
    fontFamily: "Itim, cursive",
    fontSize: "40px",
  },
  paper: {
    width: "500px",
    height: "500px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: "20px",
  },
  NewBlogContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    textAlign: "center",
  },
  video: {
    objectFit: "cover",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-1",
    opacity: "0.7",
  },
}));

const NewBlog = () => {
  const classes = useStyles();

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
      img: imgInput,
    });
    e.currentTarget.reset();
    try {
      const response = await fetch(
        "https://sounding-board.herokuapp.com/blogzs",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: newBlogPost,
        }
      );
      const data = await response.json();
      let allBlogs = [...blogPost, data];
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
  };

  return (
    <>
      <div className={classes.NewBlogContainer}>
        <Paper elevation={3} className={classes.paper}>
          <h2 className={classes.h2}>new blog</h2>
          <div className={classes.inputFields}>
            <form
              onSubmit={createBlogPost}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="title"
                label="Title"
                variant="filled"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
              <TextField
                id="author"
                label="Author"
                variant="filled"
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
              />
              <TextField
                id="content"
                label="Content"
                variant="filled"
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
              />
              <TextField
                id="img"
                label="Image URL"
                variant="filled"
                value={imgInput}
                onChange={(e) => setImgInput(e.target.value)}
              />
              <br />
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "darkorange",
                  marginTop: "10px",
                }}
              >
                <input
                  type="submit"
                  value="Post"
                  className={classes.blogPostButton}
                />
              </Button>
            </form>
          </div>
        </Paper>
      </div>
      <video
        className={classes.video}
        playsinline
        autoPlay
        muted
        loop
        src="https://storage.coverr.co/videos/d7rZs89ReU3RlaHTZxBo02VDZMD19aufT?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMzAyODMxfQ.e1Bl8gQszKITL7VgJfbSePr1NKtQMsKIK6APy46g72g"
      ></video>
    </>
  );
};

export default NewBlog;

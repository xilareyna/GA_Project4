import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// add comments form for the show route

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
    marginBottom: "0",
  },
  paper: {
    width: "100%",
  },
  NewCommentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
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

const Comments = ({ blogPost }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [ideasInput, setIdeasInput] = useState("");

  // INDEX / GET
  const getComments = async () => {
    try {
      const res = await fetch(
        `https://sounding-board.herokuapp.com/blogzs/${blogPost.id}/comments`
      );
      const json = await res.json();
      setComments(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  // CREATE / POST
  const createNewComment = async (e, id) => {
    e.preventDefault();
    // let noteHolder = noteInput.current.value;
    let newComment = JSON.stringify({
      name: nameInput,
      email: emailInput,
      ideas: ideasInput,
    });
    e.currentTarget.reset();
    try {
      const response = await fetch(
        `https://sounding-board.herokuapp.com/blogzs/${blogPost.id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: newComment,
        }
      );
      const data = await response.json();
      let allComments = [...comments, data];
      // Please test this.
      // Can't remember what post returns
      setComments(allComments);
      setNameInput("");
      setEmailInput("");
      setIdeasInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <h2 className={classes.h2}>New Comment</h2>
        <div className={classes.NewCommentContainer}>
          <div className={classes.inputFields}>
            <form
              onSubmit={createNewComment}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="name"
                label="Name"
                variant="filled"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                variant="filled"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <TextField
                id="ideas"
                label="Ideas"
                variant="filled"
                value={ideasInput}
                onChange={(e) => setIdeasInput(e.target.value)}
              />
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "darkorange",
                  marginLeft: "125px",
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
        </div>
      </Paper>
      <video
        className={classes.video}
        playsinline
        autoPlay
        muted
        loop
        src="https://storage.coverr.co/videos/f006BNNyXdkcTJxvmM3yumznlBKS00RdQ4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMzA4MTQ0fQ.eh4sgSzF8ahuhlztyvO_FhDTtBLuO5KfuKe27lbyyrg"
      ></video>
    </>
  );
};

export default Comments;

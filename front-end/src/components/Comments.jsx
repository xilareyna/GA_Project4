import { useState, useEffect, useRef } from "react";
// add comments form for the show route

const Comments = ({ blogPost }) => {
  const [comments, setComments] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [ideasInput, setIdeasInput] = useState("");

  // INDEX / GET
  const getComments = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/blogzs/${blogPost.id}/comments`
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
        `http://localhost:3000/blogzs/${blogPost.id}/comments`,
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
      <h4>New Comment</h4>
      <div className="create-new-comment-container">
        <form onSubmit={createNewComment}>
          <label>Name</label>
          <input
            type="text"
            id="name"
            className="comment-name-input"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            id="email"
            className="comment-email-input"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <label>Ideas</label>
          <input
            type="text"
            id="ideas"
            className="comment-ideas-input"
            value={ideasInput}
            onChange={(e) => setIdeasInput(e.target.value)}
          />

          <input type="submit" value="Post" className="comment-create-button" />
        </form>
      </div>
      {comments
        ? comments.map((comment, index) => {
            return (
              <div>
                <h2>{comment.name}</h2>
                <p>{comment.ideas}</p>
                <p>{comment.email}</p>
              </div>
            );
          })
        : "No comments yet..."}
    </>
  );
};

export default Comments;

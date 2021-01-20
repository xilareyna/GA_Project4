import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Comments from "./components/Comments.jsx";
import Home from "./components/Home.jsx";
import NewBlog from "./components/New-blog.jsx";
import Show from "./components/Show.jsx";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <h1>Let's make a change.</h1>
      <Comments />
      <Home />
      <NewBlog />
      <Show />
    </div>
  );
}

export default App;

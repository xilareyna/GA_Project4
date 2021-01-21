import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Comments from "./components/Comments.jsx";
import Home from "./components/Home.jsx";
import NewBlog from "./components/New-blog.jsx";
import Show from "./components/Show.jsx";
require("dotenv").config();

function App() {
  // const [blogPosts, setBlogPosts] = useState([]);

  // // INDEX / GET
  // const getBlogPosts = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/blogzs");
  //     const json = await res.json();
  //     setBlogPosts(json);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getBlogPosts();
  // }, []);

  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link className="nav-links-for-css" to="/">
            Home
          </Link>
          <Link className="nav-links-for-css" to="/newblog">
            Create New Blog
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newblog" component={NewBlog} />
        <Route path="/blogzs/:id" component={Show} />
      </Switch>
    </div>
  );
}

export default App;

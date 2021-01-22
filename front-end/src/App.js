import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Comments from "./components/Comments.jsx";
import Home from "./components/Home.jsx";
import NewBlog from "./components/New-blog.jsx";
import Show from "./components/Show.jsx";
import Footer from "./components/Footer";
require("dotenv").config();

const useStyles = makeStyles({
  navBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navButton: {
    backgroundColor: "darkorange",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <Link className="navLinkHome" to="/">
            Home
          </Link>
          <Button className={classes.navButton}>
            <Link className="navLinkCreateNewBlog" to="/newblog">
              Create New Blog
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newblog" component={NewBlog} />
        <Route path="/blogzs/:id" component={Show} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

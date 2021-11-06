import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Media from "./pages/Media";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../src/fonts/stylesheet.css";
import "../src/App.css";
// import { setContext } from "@apollo/client/link/context";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Music">
            <Music />
          </Route>
          <Route exact path="/Media">
            <Media />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

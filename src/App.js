import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Media from "./pages/Media";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../src/App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/music">
            <Music />
          </Route>
          <Route exact path="/media">
            <Media />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

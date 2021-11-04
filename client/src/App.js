import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../src/fonts/stylesheet.css";
import "../src/App.css";
// import { setContext } from "@apollo/client/link/context";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <Router>
    <>
      <NavBar />
      <Home />
    </>
    // </Router>
  );
}

export default App;

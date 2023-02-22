import { Fragment } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Background imageUrl={undefined} imageAlt={undefined} />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

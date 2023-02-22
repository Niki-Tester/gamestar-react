import { Fragment } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <Background imageUrl={undefined} imageAlt={undefined} />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

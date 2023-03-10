import { Fragment } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";
import Game from "./Pages/Game/Game";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <Fragment>
      <Router>
        <Background imageUrl={undefined} imageAlt={undefined} />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/game/:id" element={<Game />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

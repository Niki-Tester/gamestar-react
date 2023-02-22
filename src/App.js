import { Fragment } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <Fragment>
      <Background imageUrl={undefined} imageAlt={undefined} />
      <NavBar />
    </Fragment>
  );
}

export default App;

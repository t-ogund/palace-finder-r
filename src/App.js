import './App.css';
import React from "react";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";

function App(props) {
  console.log("APP PROPS: ", props)
  return (
    <React.Fragment>
      <Navigation />
      <Splash />
    </React.Fragment>
  );
}

export default App;

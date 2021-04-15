import './App.css';
import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import SearchResults from "./components/SearchResults";
import HomeBottom from "./components/HomeBottom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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

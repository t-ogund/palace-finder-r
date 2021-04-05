import './App.css';
import React from "react";
import Home from "./components/Home";
import Buy from "./components/Buy";
import Rent from "./components/Rent";
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
      {/* <HomeBottom /> */}
      {/* <PropertyCard cost="$3,200/mo" beds="3 bds" baths="3 ba" sqft="3,321 sqft" />
      <PropertyCard  cost="$2,100/mo" beds="2 bds" baths="2 ba" sqft="1,221 sqft" /> */}
    </React.Fragment>
  );
}

export default App;

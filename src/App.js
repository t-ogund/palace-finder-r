import './App.css';
import React from "react";
import PropertyCard from "./components/PropertyCard";
import Home from "./components/Home";
import Splash from "./components/Splash";
import HomeBottom from "./components/HomeBottom";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Splash />
      <HomeBottom />
      {/* <PropertyCard cost="$3,200/mo" beds="3 bds" baths="3 ba" sqft="3,321 sqft" />
      <PropertyCard  cost="$2,100/mo" beds="2 bds" baths="2 ba" sqft="1,221 sqft" /> */}
    </React.Fragment>
  );
}

export default App;

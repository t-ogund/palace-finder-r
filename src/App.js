import './App.css';
import React from "react";
import Home from "./components/Home";
import Buy from "./components/Buy";
import Rent from "./components/Rent";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/buy"><Buy /></Route>
        <Route path="/rent"><Rent /></Route>
      </Switch>
      {/* <PropertyCard cost="$3,200/mo" beds="3 bds" baths="3 ba" sqft="3,321 sqft" />
      <PropertyCard  cost="$2,100/mo" beds="2 bds" baths="2 ba" sqft="1,221 sqft" /> */}
    </React.Fragment>
  );
}

export default App;

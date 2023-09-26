import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

// import general css
import "./css/styles.css";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import Tv from "./Pages/tv/Tv";
import Music from "./Pages/music/Music";
import Support from "./Pages/support/Support";




function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/tv" exact component={Tv} />
          <Route path="/Music" exact component={Music} />
          <Route path="/watch" exact component={Watch} />
          <Route path="/support" exact component={Support} />
          <Route path="/ipad" exact component={Ipad} />
         
        </Switch>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;

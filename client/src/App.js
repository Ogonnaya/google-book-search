import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Books} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

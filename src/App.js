import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Stats from "./components/Stats";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          React JS Bootstrap
        </h3>
        <h5 className="m-3 d-flex justify-content-center">Web API</h5>

        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/quiz" component={Quiz} exact />
          <Route path="/stats" component={Stats} exact />
        </Switch>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;

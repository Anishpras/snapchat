import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapure";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./Preview";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_body">
          <Switch>
            <Route exact path="/preview">
              <Preview/>
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

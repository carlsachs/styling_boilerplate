import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import separate components
import Standard from "./hero/Standard";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route exact path="/">
            <Standard />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

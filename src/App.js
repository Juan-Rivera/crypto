import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Prices from './components/prices/Prices';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/prices'>
            <Prices />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from '../components/Home';
import { About } from '../components/About';

export const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>  
      </React.Fragment>
    </Router>
  );
}
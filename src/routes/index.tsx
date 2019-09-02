import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));

export const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </React.Fragment>
    </Router>
  );
}
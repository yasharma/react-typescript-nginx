import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from '../components/ErrorBoundry';

const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));

export const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </React.Fragment>
    </Router>
  );
}
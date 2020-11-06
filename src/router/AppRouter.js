import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes } from "./routes";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Navigation from "../components/Navigation/Navigation";

const AppRouter = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.about} component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;

import { Switch, Route } from "react-router-dom";

import { About } from "../components/about";
import { Portfolio } from "../components/portfolio";
import { Resume } from "../components/resume";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/portfolio/:type">
        <Portfolio />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/">
        <About />
      </Route>
    </Switch>
  );
};

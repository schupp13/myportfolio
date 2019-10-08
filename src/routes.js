import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
// import Projects from "./components";

export default (
  <Switch>
    <Route exact path="/" component={Landing}></Route>
    {/* <Route path="/projects" component={Projects}></Route> */}
  </Switch>
);

import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import ProjectPage from "./components/ProjectPage/ProjectPage";

export default (
  <Switch>
    <Route exact path="/" component={Landing}></Route>
    <Route path="/project/:id" component={ProjectPage} />{" "}
  </Switch>
);

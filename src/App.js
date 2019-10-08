import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import routes from "../src/routes";

function App() {
  return (
    <HashRouter>
      <div className="App">{routes}</div>
    </HashRouter>
  );
}

export default App;

import React from "react";
import { Button } from "antd";
import { HashRouter, Link, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import Home from "./screens/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/login">
        <Auth />
      </Route>
    </HashRouter>
  );
}

export default App;

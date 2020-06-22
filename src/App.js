import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Cookie from "js-cookie";
import Auth from "./screens/Auth";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact>
        {Cookie.get("auth-token") ? <Dashboard /> : <Home />}
      </Route>

      <Route path="/login">
        <Auth />
      </Route>
    </HashRouter>
  );
}

export default App;

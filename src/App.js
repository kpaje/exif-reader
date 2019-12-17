import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./pages/HomePage";
import ExifPage from "./pages/ExifPage";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div>
      <Dashboard />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/exif" component={ExifPage} />
      </Switch>
      <Copyright />
    </div>
  );
}

export default App;

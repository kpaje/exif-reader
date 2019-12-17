import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FingerprintPage from "./pages/FingerprintPage";
import Copyright from "./components/Copyright";

function App() {
  return (
    // <div>
    //   <HomePage />
    // </div>
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/fingerprint" component={FingerprintPage} />
      </Switch>
      <Copyright />
    </div>
  );
}

export default App;

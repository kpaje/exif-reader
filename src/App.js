import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ExifPage from "./pages/ExifPage";
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
        <Route path="/exif" component={ExifPage} />
      </Switch>
      <Copyright />
    </div>
  );
}

export default App;

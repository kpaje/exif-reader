import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { exifRead } from "./api/exif-js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input id="filepicker" type="file" multiple></input>
        {exifRead()}
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import img from "./api/test.jpg";
import * as exifr from "exifr";

function App() {
  const exifRead = () => {
    exifr
      .parse(img)
      .then(exif => {
        let obj = Object.assign({
          Make: exif.Make,
          Model: exif.Model,
          Software: exif.Software,
          DateTimeOriginal: exif.DateTimeOriginal,
          ModifyDate: exif.ModifyDate,
          Latitude: exif.latitude,
          GPSLatitudeRef: exif.GPSLatitudeRef,
          Longtitude: exif.longitude,
          GPSLongitudeRef: exif.GPSLongitudeRef
        });
        console.log(obj);
      })
      .catch(console.error);
  };

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

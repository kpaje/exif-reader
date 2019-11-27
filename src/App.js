import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { exifRead } from "./api/exif-js";
import * as exifr from "exifr";
// import img from "./api/test.jpg";

function App() {
  const ref = useRef(null);

  const exifRead = e => {
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    exifr
      .parse(files)
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

        <input
          id="filepicker"
          ref={ref}
          onChange={exifRead}
          type="file"
        ></input>
        <button onClick={exifRead}> TEST </button>
      </header>
    </div>
  );
}

export default App;

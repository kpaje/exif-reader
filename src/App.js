import React, { useState } from "react";
import "./App.css";
import * as exifr from "exifr";
import MapContainer from "./components/googleMap";

function App() {
  const [thumbnail, setThumbnail] = useState();
  const [exifData, setExifData] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const exifRead = e => {
    const files = e.target.files[0];
    const thumbnailUrl = window.URL.createObjectURL(files);
    setThumbnail(thumbnailUrl);

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

        setLat(exif.latitude);
        setLng(exif.longitude);

        let renderObj = Object.entries(obj).map(([key, value]) => {
          return (
            <tr key={key}>
              <td style={styles.table}>{key}</td>
              <td style={styles.table}>{value.toString()}</td>
            </tr>
          );
        });

        setExifData(renderObj);
      })
      .catch(console.error);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={thumbnail} className="App-logo" alt={thumbnail} />

        <input id="filepicker" onChange={exifRead} type="file"></input>

        <table style={styles.table}>
          <tbody>{exifData}</tbody>
        </table>
      </header>
      <MapContainer lat={lat} lng={lng} />
    </div>
  );
}

const styles = {
  table: {
    textAlign: "left",
    border: "1px solid",
    borderCollapse: "collapse"
  }
};

export default App;

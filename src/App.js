import React, { useState } from "react";
import "./App.css";
import * as exifr from "exifr";
import MapContainer from "./api/googleMap";

function App() {
  const [thumbnail, setThumbnail] = useState();
  const [exifData, setExifData] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  let obj;

  const createThumbnail = e => {
    const thumbnailUrl = window.URL.createObjectURL(e);
    setThumbnail(thumbnailUrl);
  };

  const generateExif = e => {
    const files = e.target.files[0];
    createThumbnail(files);

    exifr
      .parse(files)
      .then(exif => {
        obj = Object.assign({
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
        setExifData(obj);
      })
      .catch(console.error);
  };

  const setGPSCoordinates = () => {
    setLat(obj.latitude);
    setLng(obj.longitude);
  };

  const renderObj = () => {
    Object.entries(obj).map(([key, value]) => {
      return (
        <tr key={key}>
          <td style={styles.table}>{key}</td>
          <td style={styles.table}>{value.toString()}</td>
        </tr>
      );
    });
  };

  const renderExif = e => {
    generateExif(e);
    console.log(exifData);

    // generateExif(e);
    // setGPSCoordinates();
    // setExifData(renderObj());
  };

  return (
    <div>
      <div className="App-header">
        <img src={thumbnail} className="App-logo" alt={thumbnail} />

        <input id="filepicker" onChange={renderExif} type="file"></input>

        <table style={styles.table}>
          <tbody>{renderObj}</tbody>
        </table>
      </div>
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

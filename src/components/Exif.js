import React, { useState } from "react";
import "../App.css";
import * as exifr from "exifr";
import MapContainer from "../api/googleMap";
import { formatObj } from "../utils/helpers";
import { objProps, createTable, createThumbnail } from "../api/exif-js";

function Exif() {
  const [thumbnail, setThumbnail] = useState();
  const [tableData, setTableData] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const processExif = (exif, image) => {
    let exifData = formatObj(exif, objProps);

    let table = createTable(exifData);
    setTableData(table);

    let thumbnail = createThumbnail(image);
    setThumbnail(thumbnail);

    setLat(exifData.latitude);
    setLng(exifData.longitude);
  };

  const generateExif = event => {
    const image = event.target.files[0];
    exifr
      .parse(image)
      .then(exif => {
        processExif(exif, image);
      })
      .catch(console.error);
  };

  return (
    <div>
      <header className="App-header">
        <img src={thumbnail} className="App-logo" alt={thumbnail} />

        <input id="filepicker" onChange={generateExif} type="file"></input>

        <table style={styles.table}>
          <tbody>{tableData}</tbody>
        </table>
      </header>
      <MapContainer lat={lat} lng={lng} />
    </div>
  );
}

export default Exif;

const styles = {
  table: {
    textAlign: "left",
    border: "1px solid",
    borderCollapse: "collapse"
  }
};

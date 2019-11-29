import React, { useState } from "react";
import "../App.css";
import * as exifr from "exifr";
import MapContainer from "./googleMap";
import { formatObj } from "../utils/helpers";

function Exif() {
  const [thumbnail, setThumbnail] = useState();
  const [tableData, setTableData] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const objProps = [
    "Make",
    "Model",
    "Software",
    "DateTimeOriginal",
    "ModifyDate",
    "latitude",
    "GPSLatitudeRef",
    "longitude",
    "GPSLongitudeRef"
  ];

  const createTable = e => {
    let res = Object.entries(e).map(([key, value]) => {
      return (
        <tr key={key}>
          <td style={styles.table}>{key}</td>
          <td style={styles.table}>{value.toString()}</td>
        </tr>
      );
    });
    return res;
  };

  const createThumbnail = e => {
    const thumbnailUrl = window.URL.createObjectURL(e);
    return thumbnailUrl;
  };

  const setGPSCoordinates = obj => {
    setLat(obj.latitude);
    setLng(obj.longitude);
  };

  const generateExif = e => {
    const image = e.target.files[0];
    exifr
      .parse(image)
      .then(exif => {
        let exifRes = formatObj(exif, objProps);

        let table = createTable(exifRes);
        setTableData(table);

        let thumbnail = createThumbnail(image);
        setThumbnail(thumbnail);

        setGPSCoordinates(exifRes);
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

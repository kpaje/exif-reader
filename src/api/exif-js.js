import React from "react";

export const objProps = [
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

export const createTable = event => {
  let res = Object.entries(event).map(([key, value]) => {
    return (
      <tr key={key}>
        <td style={styles.table}>{key}</td>
        <td style={styles.table}>{value.toString()}</td>
      </tr>
    );
  });
  return res;
};

export const createThumbnail = event => {
  const thumbnailUrl = window.URL.createObjectURL(event);
  return thumbnailUrl;
};

// export const setGPSCoordinates = obj => {
//   setLat(obj.latitude);
//   setLng(obj.longitude);
// };

const styles = {
  table: {
    textAlign: "left",
    border: "1px solid",
    borderCollapse: "collapse"
  }
};

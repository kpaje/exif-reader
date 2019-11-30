import React from "react";
import * as exifr from "exifr";

export const definedProps = [
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

export const formatTable = exifData => {
  let result = Object.entries(exifData).map(([key, value]) => {
    return (
      <tr key={key}>
        <td style={styles.table}>{key}</td>
        <td style={styles.table}>{value.toString()}</td>
        {/* requires .toString() because value contains nested object */}
      </tr>
    );
  });
  return result;
};

export const detectThumbnail = exifData => {
  const thumbnailUrl = window.URL.createObjectURL(exifData);
  return thumbnailUrl;
};

export const parseData = (event, cb) => {
  const image = event.target.files[0];
  exifr
    .parse(image)
    .then(exif => {
      cb(exif, image);
    })
    .catch(console.error);
};

const styles = {
  table: {
    textAlign: "left",
    border: "1px solid",
    borderCollapse: "collapse"
  }
};

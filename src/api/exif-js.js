import React, { useState } from "react";
import * as exifr from "exifr";

function exifRead(e) {
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
}

export default exifRead;

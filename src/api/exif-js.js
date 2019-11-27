import * as exifr from "exifr";
import * as fs from "fs";

// export const exifRead = function() {
//   exifr
//     .parse("./test.jpg")
//     .then(exif => console.log("Camera:", exif.Make, exif.Model))
//     .catch(console.error);
// };

// export default exifRead;
// module.exports = exifRead;

// const exifr = require("exifr");
// const fs = require("fs");

export function exifRead() {
  fs.readFileSync("../public/img/test.jpg")
    // fs.readFileSync("test.jpg")
    .then(exifr.parse)
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
}
// exifRead();

// module.exports.exifRead = exifRead;

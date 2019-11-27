import * as exifr from "exifr";
import img from "./test.jpg";

export const exifRead = () => {
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
      window.URL.createObjectURL(img[0]);
    })
    .catch(console.error);
};

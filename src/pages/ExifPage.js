import React from "react";
import Dropzone from "../components/Dropzone";
import GoogleMap from "../api/googleMap";

function ExifPage() {
  return (
    <div className="exif">
      <GoogleMap />
      <Dropzone />
    </div>
  );
}

export default ExifPage;

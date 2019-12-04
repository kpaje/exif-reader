import React, { useState } from "react";
import "../App.css";
import * as exifr from "exifr";
import { formatObj } from "../utils/helpers";
import { definedProps, detectThumbnail } from "../api/exif-js";
import Thumbnail from "./Thumbnail";
import Filepicker from "./Filepicker";
import Table from "./Table";
import GoogleMap from "../api/googleMap";

function Exif() {
	const [thumbnail, setThumbnail] = useState();
	const [tableData, setTableData] = useState({});
	const [lat, setLat] = useState("");
	const [lng, setLng] = useState("");

	const handlers = {
		getTableData: function(exifData) {
			setTableData(exifData);
		},
		getThumbnail: function(image) {
			let thumbnail = detectThumbnail(image);
			setThumbnail(thumbnail);
		},
		getGPSCoordinates: function(exif) {
			setLat(exif.latitude);
			setLng(exif.longitude);
		}
	};

	const processExif = (exif, image) => {
		let exifData = formatObj(exif, definedProps);
		handlers.getGPSCoordinates(exifData);
		handlers.getTableData(exifData);
		handlers.getThumbnail(image);
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
				<Thumbnail src={thumbnail} alt={thumbnail} />
				<Filepicker onChange={generateExif} />
				<Table tableData={tableData} />
			</header>
			<GoogleMap lat={lat} lng={lng} />
		</div>
	);
}

export default Exif;

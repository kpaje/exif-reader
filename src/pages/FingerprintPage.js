import React from "react";
import Exif from "../components/Exif";
import Fingerprint from "../components/Fingerprint";
import Dashboard from "../components/Dashboard";
import Dropzone from "../components/Dropzone";
import GoogleMap from "../api/googleMap";

function FingerprintPage() {
	return (
		<div className="fingerprint">
			<GoogleMap />
			<Dropzone />
		</div>
	);
}

export default FingerprintPage;

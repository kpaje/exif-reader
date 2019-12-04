import React, { setState } from "react";
import "../App.css";

function Thumbnail(props) {
	const [state, setState] = setState();
	const detectThumbnail = exifData => {
		const thumbnailUrl = window.URL.createObjectURL(exifData);
		setState(thumbnailUrl);
	};
	return (
		<div>
			<img src={state.src} className="App-logo" alt={state.alt} />
		</div>
	);
}

export default Thumbnail;

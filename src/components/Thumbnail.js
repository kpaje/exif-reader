import React from "react";

function Thumbnail(thumbnail) {
	let imgURL = null;
	//create blob from image to link url for thumbnail
	if (thumbnail.src) {
		imgURL = URL.createObjectURL(thumbnail.src);
	}
	return (
		<div>
			{imgURL !== null ? (
				<img src={imgURL} alt={thumbnail.alt} className="App-logo" />
			) : null}
		</div>
	);
}

export default Thumbnail;

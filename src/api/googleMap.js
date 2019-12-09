import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
require("dotenv").config();

let REACT_APP_GOOGLE_API = process.env.REACT_APP_GOOGLE_API;

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				// style={{ height: "30vmin", width: "300" }}
				// style={{ flex: "1" }}
				// style={{ height: "30vmin", width: "60vmin", position: "relative" }}
				center={{
					lat: this.props.lat,
					lng: this.props.lng
				}}
				className={"map"}
				zoom={17}
			>
				<Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
			</Map>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: REACT_APP_GOOGLE_API
})(MapContainer);

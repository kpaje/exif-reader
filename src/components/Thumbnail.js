import React from "react";
import "../App.css";

function Thumbnail(props) {
  return (
    <div>
      <img src={props.src} className="App-logo" alt={props.alt} />
    </div>
  );
}

export default Thumbnail;

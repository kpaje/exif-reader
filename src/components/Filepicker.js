import React from "react";

function Filepicker(props) {
  return (
    <div>
      <input id="filepicker" onChange={props.onChange} type="file"></input>
    </div>
  );
}

export default Filepicker;

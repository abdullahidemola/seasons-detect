import React from "react";
const Load = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  );
};
Load.defaultProps = {
  message: "Loading...",
};

export default Load;

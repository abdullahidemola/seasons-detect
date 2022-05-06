import React from "react";
import "./seasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "It's summer, let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "It's winter, burr it's chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const seasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`${season} season-display`}>
      <i className={`icon-right massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-left massive ${iconName} icon`}></i>
    </div>
  );
};

export default seasonDisplay;

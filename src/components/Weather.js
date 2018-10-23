import React from "react";
//This is stateless functional componenet since it has no state!

const convertTemp = x => {
  return ((x - 273.15) * 9) / 5 + 32;
};
const Weather = props => {
  return (
    <div class="animated fadeIn" className="data">
      {props.city &&
        props.country && (
          <p>
            Location: {props.city}, {props.country}
          </p>
        )}
      {props.temperature && (
        <p>Temperature: {convertTemp(props.temperature).toFixed(2)} F°</p>
      )}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};
export default Weather;

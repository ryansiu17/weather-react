import React from "react";
//This is stateless functional componenet since it has no state!

const Weather = props => {
  return (
    <div class="animated fadeIn" className="data">
      {props.city &&
        props.country && (
          <p>
            Location: {props.city}, {props.country}
          </p>
        )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};
export default Weather;

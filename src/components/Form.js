import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather} className="inputs">
    <input className="input1" type="text" name="city" placeholder="City" />
    <input
      className="input2"
      type="text"
      name="country"
      placeholder="Country"
    />
    <button className="button">Get Weather</button>
  </form>
);
export default Form;

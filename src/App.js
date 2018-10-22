import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.scss";
const API_KEY = "3100f7a8fa3793178caf3c266d4f8dde";
//state is an object that lives within a component and is reponsible for keeping track of changing data within a component. (User clicking buton or submitting form, an interaction)

class App extends React.Component {
  state = {
    //initial state
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    //e is event call in js
    e.preventDefault();
    //const city takes the name of the input tag we have in form
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //making call to URL
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    //converting data from API to readable format (JSON)
    const data = await api_call.json();
    console.log(data);

    //Checks for if country and city have been returned by the API and only then sets state
    city && country //setting state to data through setState, rather than directly setting state. (this.state.temp = ... <- BAD)
      ? this.setState({
          //data is the object, main is an array within data, temp is stored in main.
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          //in the console it says >weather Array(1), then >0
          description: data.weather[0].description,
          error: undefined
        })
      : this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter a valid city and country"
        });
  };
  render() {
    return (
      <div className="main">
        <div className="block1">
          <div className="text1">
            <Titles className="title" />
            <Form getWeather={this.getWeather} />
          </div>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.humidity}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;

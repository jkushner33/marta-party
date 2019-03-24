import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { buses: [] };

  componentDidMount() {
    fetch(
      "http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          buses: json
        });
      });
  }

  render() {
    const { buses } = this.state;

    return (
      <div className="App">
        {buses.map(bus => (
          <>
            <p>{bus.LONGITUDE}</p>
            <p>{bus.LATITUDE}</p>
          </>
        ))}
      </div>
    );
  }
}

export default App;

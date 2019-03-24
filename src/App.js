import React, { Component } from "react";
import logo from "./logo.svg";
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            {buses.map(bus => (
              <>
                <p>{bus.LONGITUDE}</p>
                <p>{bus.LATITUDE}</p>
              </>
            ))}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  };
  render() {
    return (
      <div className="App">
        <h1>Food Violations</h1>
        <section className="list">
        <button type="button" class="btn btn-primary">
          Find restaurants
        </button>
        <div className="grid">
          {this.state.data.map((restaurant) => (
            <ButtonCard student={restaurant} />
          ))}
          componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/43nn-pn8j.json?$$app_token=v9CzGzRoHQTpZejn2Bqdz0XPy"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
          <ul>
          <Navbar />
            {this.state.data.map((restaurant) => (
              <p>{restaurant.dba}</p>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import RangeInput from "./Components/RangeInput";
import SelectInput from "./Components/SelectInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <ul className="cards">
          <Navbar />
          <RangeInput />
          <SelectInput />
        </ul>
      </div>
    );
  }
}

export default App;

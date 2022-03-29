import React, { Component } from "react";
import "./App.css";
import RangeInput from "./Components/RangeInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <ul className="cards">
          <RangeInput />
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null
    };
  }

  // The event will be passed in automatically.
  handleChange = (event) => {
    this.setState({ select: event.target.value });
  };

  render() {
    return (
      <li className="SelectInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-image"></div>
            <div className="card-title">Location</div>
            <p className="card-text">
              <div className="input">
                <select className="selectInput">
                  <option value="">Select Borough:</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Queens">Queens</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Staten Island">Staten Island</option>
                </select>
              </div>
              <div className="output">
                <label for="selectOutput">Image: </label>
                <span name="selectOutput">{this.state.select}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default SelectInput;

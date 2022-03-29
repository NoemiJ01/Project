import React, { Component } from "react";

class RangeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: null
    };
  }

  // The event will be passed in automatically.
  handleChange = (event) => {
    this.setState({ range: event.target.value });
  };

  render() {
    return (
      <li className="RangeInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-image"></div>
            <div className="card-title">Price Range</div>
            <p className="card-text">
              <div className="input">
                <input
                  type="range"
                  className="rangeInput"
                  onChange={this.handleChange}
                />
              </div>
              <div className="output">
                <label for="rangeOutput">$ </label>
                <span name="rangeOutput">{this.state.range}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default RangeInput;

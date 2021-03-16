import React, { Component } from "react";
import { getSomething } from "./cefsharp";

class Form extends Component {
  state = { message: "" };

  handleClick = (clickEvent) => {
    clickEvent.preventDefault();
    this.setState({ message: getSomething() });
  };

  render() {
    return (
      <div>
        <input type="text" defaultValue={this.state.message} />
        <button onClick={this.handleClick}>Receive from Revit</button>
      </div>
    );
  }
}

export default Form;

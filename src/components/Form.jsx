import React, { Component } from "react";
import { receiveFromRevit } from "./cefsharp";

class Form extends Component {
  state = {
    message: "",
  };

  handleRequest = (clickEvent) => {
    clickEvent.preventDefault();
    this.setState({ message: receiveFromRevit() });
  };

  render() {
    return (
      <div>
        <input type="text" defaultValue={this.state.message} />
        <button onClick={this.handleRequest}>Receive from Revit</button>
      </div>
    );
  }
}

export default Form;

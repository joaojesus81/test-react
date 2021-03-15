import React, { Component } from "react";
import { receiveFromRevit } from "./cefsharp";

class Form extends Component {
  componentDidMount() {
    receiveFromRevit();
  }

  render() {
    return (
      <div>
        <label id="tbReceivedFromRevit" className="tbReceivedFromRevit">
          Received from Revit
        </label>
        <input type="text" id="tbReceivedFromRevit" />
      </div>
    );
  }
}

export default Form;

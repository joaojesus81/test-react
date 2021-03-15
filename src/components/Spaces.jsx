import React, { Component } from "react";
import { sendToRevit } from "./cefsharp";

class Spaces extends Component {
  state = {
    msg: "",
  };
  submitPost = (submitEvent) => {
    submitEvent.preventDefault();
    sendToRevit(this.state.msg);
  };

  updateInput = (changeEvent) => {
    const { id, value } = changeEvent.target;
    this.setState({ [id]: value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitPost}>
          <input
            type="text"
            id="msg"
            value={this.state.msg}
            onChange={this.updateInput}
          />
          <button>Send to Revit</button>
        </form>
      </div>
    );
  }
}

export default Spaces;

import React, { Component } from "react";
import { receiveFromRevit } from "./cefsharp";

class Form extends Component {
  state = {
    title: "",
    selection: "",
    parameter1: "",
    parameter2: "",
  };

  onChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  onSelect = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const { title, selection, parameter1, parameter2 } = this.state;
    // console.log(JSON.stringify(this.state));
    receiveFromRevit(JSON.stringify(this.state));
    // alert(
    //   `Title: ${title},\nSelection: ${selection},\nParameter 1: ${parameter1},\nParameter 2: ${parameter2}`
    // );
    console.clear();
  };

  render() {
    const selections = [
      "selection 1",
      "selection 2",
      "selection 3",
      "selection 4",
    ];
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={this.onChange} />
          <br />
          <label htmlFor="selection">Selection:</label>
          <select name="" id="selection" onChange={this.onSelect}>
            <option
              value="none"
              defaultValue="Please select"
              disabled
              hidden
            ></option>
            {selections.map((selection) => {
              return <option key={selection}>{selection}</option>;
            })}
          </select>
          <br />
          <label htmlFor="parameter1">Parameter 1:</label>
          <input type="text" id="parameter1" onChange={this.onChange} />
          <br />
          <label htmlFor="parameter2">Parameter 2:</label>
          <input type="text" id="parameter2" onChange={this.onChange} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

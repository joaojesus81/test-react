import React, { Component } from "react";

class Form extends Component {
  state = {
    title: "",
    selections: ['selection 1', 'selection 2', 'selection 3', 'selection 4'],
    selection: '',
    parameter1: "",
    parameter2: "",
  };

  onChange = (event) => {
      const {id, value} = event.target;
      this.setState({[id]: value})
  }

  onSelect = (event) => {
    const {id, value} = event.target;
    this.setState({[id]: value})
}

  render() {
    const {selections} = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' onKeyUp={this.onChange}/><br/>
          <label htmlFor="selection">Selection:</label>
          <select name="" id="selection" onChange={this.onSelect}><option value="none" defaultValue='Please select' disabled hidden></option>{selections.map((selection) => {
              return(<option key={selection}>{selection}</option>)
          })}</select><br/>
          <label htmlFor="parameter1">Parameter 1:</label>
          <input type="text" id='parameter1' onKeyUp={this.onChange}/><br/>
          <label htmlFor="parameter2">Parameter 2:</label>
          <input type="text" id='parameter2' onKeyUp={this.onChange}/>
        </form>
      </div>
    );
  }
}

export default Form;

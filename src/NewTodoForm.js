import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props); // super means we can access the base component (Component). super(props) is when we want to use props in the constructor
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidv4() }); // sending up task via a prop called createTodo, this prop calls function in parent comp
    this.setState({ task: "" });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">Add New Todo </label>
        <input
          type="text"
          placeholder="Add your todo here"
          id="task"
          name="task" // has to match name of key in state
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;

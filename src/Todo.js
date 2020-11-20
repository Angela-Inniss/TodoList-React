import React, { Component } from "react";

import "./todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      completed: false,
      task: this.props.task,
      id: this.props.id,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate(event) {
    event.preventDefault();
    // take new data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCompleted(event) {
    event.preventDefault();
    this.setState({ completed: !this.state.completed });
  }

  render() {
    return (
      <div className="Todo-container">
        {this.state.isEditing ? (
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <label htmlFor="task">Edit Todo </label>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
              name="task"
              id="task"
            />
            <button>Save</button>
          </form>
        ) : (
          <div className="Todo">
            <li
              onClick={this.handleCompleted}
              className={
                this.state.completed ? "Todo-task completed" : "Todo-task"
              }
            >
              {this.props.task}
            </li>
            <div className="Todo-buttons">
              <button onClick={this.handleEdit}>
                Edit
              </button>
              <button onClick={this.handleRemove}>
               Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// handle submit function passes what we type in the input up

export default Todo;

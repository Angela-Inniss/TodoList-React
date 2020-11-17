import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "get better at coding" }, { task: "learn more code" }],
    };
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  createNewTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
      <div>
        <h1>
          <NewTodoForm createTodo={this.createNewTodo} />
          <ul>
            {this.state.todos.map((todo) => {
              return <Todo task={todo.task} />;
            })}
          </ul>
        </h1>
      </div>
    );
  }
}

export default TodoList;

// map returns the same amount of elements transformed

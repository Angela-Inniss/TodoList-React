import React, { Component } from "react";

import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

import "./todoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.createNewTodo = this.createNewTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  createNewTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  }

  update(id, updatedTodo) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTodo };
      }
      return todo; // return todo if its not the one to be updated
    });
    this.setState({ todos: updatedTodos }); // set state with new todos
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List<span>A simple React todo list app. </span>
        </h1>

        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Todo
                id={todo.id}
                key={todo.id}
                task={todo.task}
                removeTodo={this.remove}
                updateTodo={this.update}
                completed={todo.completed}
              />
            );
          })}
        </ul>
        <NewTodoForm createTodo={this.createNewTodo} />
      </div>
    );
  }
}

export default TodoList;

// Notes update method:
// map over todos and find the todo we want to update by it's id if the id is equal then return all the todos ...spread
// and then update just that one single task to do

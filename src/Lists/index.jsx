import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import Item from "../Item";
export default class Lists extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodos: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodos, deleteTask } = this.props;
    if (todos.length === 0) {
      return (
        <div className="todo-lists">
          <p>空空如也...</p>
        </div>
      );
    }
    return (
      <div className="todo-lists">
        <ul>
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                todo={todo}
                updateTodos={updateTodos}
                deleteTask={deleteTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

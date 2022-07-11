import React, { Component } from "react";
import Header from "./Header";
import Lists from "./Lists";
import Footer from "./Footer";
import { nanoid } from "nanoid";
import "./App.css";
export default class App extends Component {
  /*
  
    { id: 1, text: "吃饭", done: true },
      { id: 2, text: "碎觉", done: false },
      { id: 3, text: "打豆豆", done: false },
  */

  state = {
    todos: [],
  };
  /**
   * 根据id添加任务
   * @param {*} task
   */
  addTask = (task) => {
    const { todos } = this.state;
    todos.push({ id: nanoid(), text: task, done: false });
    this.setState({ todos });
  };
  /**
   * 根据id更新任务状态
   * @param {*} id
   */
  updateTodos = (id) => {
    const { todos } = this.state;
    const todo = todos.find((task) => {
      return task.id === id;
    });
    todo.done = !todo.done;
    this.setState({ todos });
  };
  /**
   * 根据id删除任务
   * @param {*} id
   */
  deleteTask = (id) => {
    let { todos } = this.state;
    const idx = todos.findIndex((item) => {
      return item.id === id;
    });
    todos.splice(idx, 1);
    this.setState({ todos });
  };
  deleteDoneTasks = () => {
    let { todos } = this.state;
    todos = todos.filter((item) => {
      return !item.done;
    });
    this.setState({ todos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <Header addTask={this.addTask} />
        <Lists
          todos={todos}
          updateTodos={this.updateTodos}
          deleteTask={this.deleteTask}
        />
        <Footer todos={todos} deleteDoneTasks={this.deleteDoneTasks} />
      </div>
    );
  }
}

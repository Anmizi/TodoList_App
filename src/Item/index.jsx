import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodos: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };
  state = {
    mouse: false,
  };
  /**
   * 鼠标移入移除任务项事件回调
   * @param {*} flag
   * @returns
   */
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  /**
   * 复选框切换事件回调
   * @param {*} id
   * @returns
   */
  handleChecked = (id) => {
    const { updateTodos } = this.props;
    return () => {
      updateTodos(id);
    };
  };
  /**
   * 删除操作事件回调
   * @param {*} id
   * @returns
   */
  handleDeleted = (id) => {
    return () => {
      const { deleteTask } = this.props;
      deleteTask(id);
    };
  };
  render() {
    const { todo } = this.props;
    const { mouse } = this.state;
    return (
      <li
        className={["todo-item", mouse ? "active" : ""].join(" ")}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <input
          type="checkbox"
          defaultChecked={todo.done}
          onChange={this.handleChecked(todo.id)}
        />
        <span>{todo.text}</span>
        <button
          className="deleteBtn"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.handleDeleted(todo.id)}
        >
          删除
        </button>
      </li>
    );
  }
}

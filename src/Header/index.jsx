import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
export default class Header extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };
  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") return;
      this.props.addTask(e.target.value);
      e.target.value = "";
    }
  };
  render() {
    return (
      <div className="todo-header">
        <h3 className="todo-title">Todo List</h3>
        <div className="todo-input">
          <input
            type="text"
            placeholder="请输入任务,输入完成后按下回车"
            onKeyUp={this.handleKeyUp}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  render() {
    const { todos, deleteDoneTasks } = this.props;
    const total = todos.length;
    const finish = todos.filter((item) => item.done).length;
    return (
      <div className="todo-footer">
        <p>
          已完成:{finish}
          |全部:{total}
          <button
            className="deleteBtn"
            onClick={deleteDoneTasks}
            type="button"
            disabled={finish === 0 ? true : false}
          >
            清除已完成任务
          </button>
        </p>
      </div>
    );
  }
}

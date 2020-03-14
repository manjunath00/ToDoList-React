import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, completed, id } = this.props.todo;
    const status = completed ? "checked" : "";
    const checked = completed ? true : false;

    return (
      <div
        className={`todo ${status}`}
        draggable={true}
        todoindex={this.props.position}
        onDragStart={this.props.dragStart}
      >
        <div className="todo-status">
          <input
            type="checkbox"
            className="checkbox"
            checked={checked}
            onChange={this.props.toggleStatus.bind(this, id)}
          />
        </div>
        <div className="todo-text">{title}</div>
        <div
          className="todo-action"
          onClick={this.props.delItem.bind(this, id)}
        >
          <button><span>&times;</span></button>
        </div>
      </div>
    );
  }
}

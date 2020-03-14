import React, { Component } from "react";

export default class Submit extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const todo = {
      completed: false,
      title: this.state.title,
      id: e.timeStamp
    };
    this.props.onSubmit(todo);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="submit--container">
        <form className="forms" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="addToDo"
              required
              placeholder="What needs to be done ?"
              className="input__text-field"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

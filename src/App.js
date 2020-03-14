import React, { Component } from "react";

import Header from "./components/layout/Header";
import Submit from "./components/layout/Submit";
import Todos from "./components/Todos";

export default class App extends Component {
  state = {
    todos: [],
    start: "",
    end: ""
  };

  createLocalStorage = () => {
    if (!localStorage.getItem("todoList")) {
      localStorage.setItem("todoList", []);
    }
  };specificMovie

  getLocalStorage = () => {
    if (!localStorage.getItem("todoList")) {
      let allItems = JSON.parse(localStorage.getItem("todoList"));
      this.setState({ todos: allItems });
      return allItems;
    }
  };

  updateLocalStorage = () => {
    if (localStorage.getItem("todoList")) {
      localStorage.setItem("todoList", JSON.stringify([...this.state.todos]));
    }
  };


  localStorage = () => {
    this.createLocalStorage();
    // this.getLocalStorage();
    
    this.updateLocalStorage();
  }

  sortTheTodos = () => {
    this.setState({
      todos: [...this.state.todos].sort((a, b) => a.completed - b.completed)
    });
  };

  addAToDo = todo => {
    this.setState({ todos: [todo, ...this.state.todos] }, this.localStorage());
  };

  toggleStatus = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
    this.sortTheTodos();
  };

  deleteAnItem = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  draggingStarted = e => {
    const start = e.target.getAttribute("todoindex");
    console.log(start);
  };

  dragging = e => {
    const end = e.target.getAttribute("todoindex");
    console.log(end);
  };

  render() {
    // this.createLocalStorage();
    // this.getLocalStorage();
    // this.updateLocalStorage();

    return (
      <div className="container">
        <Header />
        <Submit onSubmit={this.addAToDo} />
        <div className="todos--container">
          <Todos
            todos={this.state.todos}
            toggleStatus={this.toggleStatus}
            delItem={this.deleteAnItem}
            dragStart={this.draggingStarted}
          />
        </div>
      </div>
    );
  }
}

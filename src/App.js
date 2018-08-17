import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav";
import Card from "./components/Card";
import Form from "./components/Form";

import { tasks } from "./tasks.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks
    };

    this.handleAddTask = this.handleAddTask.bind(this);

  }

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    const get_tasks = this.state.tasks.map((task) => {
      return (
        <Card title={ task.title } responsible={ task.responsible }
          priority={ task.priority } description={ task.description } 
        />
      );
    })

    return (
      <div className="App">
        <Nav ntasks={ this.state.tasks.length } />
        <div className="container">
          <div className="row mt-4">
            <Form onAddTask={ this.handleAddTask } />
            { get_tasks }
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    console.log("Sending data...");
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card text-white border-dark bg-secondary mb-3 mt-4">
          <div className="card-header">
            <h4 className="card-title">Add a new task</h4>
          </div>
          <div className="card-body">

            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <label htmlFor="task_title">Task title</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="task_title" 
                  placeholder="Title" 
                  name="title" 
                  onChange={ this.handleInput }/>
              </div>

              <div className="form-group">
                <label htmlFor="task_responsible">Responsible</label>
                <input 
                  type="text"
                  className="form-control" 
                  id="task_responsible" 
                  placeholder="Responsible" 
                  name="responsible" 
                  onChange={ this.handleInput }/>
              </div>

              <div className="form-group">
                <label htmlFor="task_priority">Task priority</label>
                <select 
                  className="form-control" 
                  id="task_priority" 
                  name="priority" 
                  onChange={ this.handleInput }>
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="task_description">Task description</label>
                <textarea 
                  className="form-control"
                  id="task_description"
                  rows="3" name="description"
                  placeholder="Description"
                  onChange={ this.handleInput }>
                </textarea>
              </div>

              <button type="submit" className="btn btn-primary">Add</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Form;
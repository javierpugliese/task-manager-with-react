import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
          <div className="col-sm-6">
            <div className="card mt-4">
              <div className="card-header">
                <h4 className="card-title">{ this.props.title }</h4>
                <span className="badge badge-pill badge-danger">{ this.props.priority }</span>
              </div>
              <div className="card-body">
                <h5><mark>{ this.props.responsible }</mark></h5>
                <p className="text-primary">
                  { this.props.description }
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Card;
import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="text-white">
                        CURRENT TASKS  
                        <span className="badge badge-pill badge-light">{ this.props.ntasks }</span>
                    </a>
                </nav>
            </div>
        );
    }
}

export default Nav;
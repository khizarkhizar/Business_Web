import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href={process.env.PUBLIC_URL + "/#mainbody"}
        >
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a
                className="nav-link"
                href={process.env.PUBLIC_URL + "/#mainbody"}
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={process.env.PUBLIC_URL + "/#about"}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={process.env.PUBLIC_URL + "/#projects"}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={process.env.PUBLIC_URL + "/#working"}
              >
                Working
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

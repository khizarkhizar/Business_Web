import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="display-4 text-center my-5"> Teacher or Student??</h1>

        <button className="btn btn-dark btn-lg"> Log out </button>
      </div>
    );
  }
}
export default Signin;

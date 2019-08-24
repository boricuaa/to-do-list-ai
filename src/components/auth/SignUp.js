import React, { Component } from "react";

export default class SignUp extends Component {
  state = "";
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="text-center text-capitalize">Please Sign Up</h3>

            {/* <img
              src="https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010_1280.jpg"
              alt=""
            /> */}
          </div>
          <div className="col-sm-6">
            <form className="my-4">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-large btn-primary">
                Submit
              </button>
            </form>{" "}
          </div>
        </div>
      </div>
    );
  }
}

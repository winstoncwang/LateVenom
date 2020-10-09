import React from "react";
import { Link } from "react-router-dom";

class LogInForm extends React.Component {
  render() {
    return (
      <div className="main ui container" style={{ width: "40%" }}>
        <form className="main ui form container">
          <h2 className="ui blue header left aligned">SIGN IN</h2>
          <h4 className="ui header left aligned">
            New User ? &nbsp;
            <u>
              <Link to="/users">Create an account</Link>
            </u>
          </h4>
          <br></br>
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeHolder="Username" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeHolder="password" />
          </div>
          <br></br>
          <div className="buttons">
            <button className="ui button" type="submit">
              SUBMIT
            </button>
            <button className="ui button" type="cancel">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogInForm;

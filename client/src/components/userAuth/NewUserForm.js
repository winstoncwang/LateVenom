import React from "react";

class NewUserForm extends React.Component {
  render() {
    return (
      <div className="main ui container" style={{ width: "70%" }}>
        <h2 className="ui left aligned blue header">Create an account</h2>
        <br></br>
        <br></br>
        <div className="ui form">
          <h4 className="ui dividing header">User Information</h4>
          <div className="required field">
            <label>Username</label>
            <input type="text" name="username" placeHolder="Username" />
          </div>
          <div className="required field">
            <label>Password</label>
            <input type="password" name="password" placeHolder="Password" />
          </div>
          <div className="required field">
            <label>First name</label>
            <input type="text" name="firstname" placeHolder="First name" />
          </div>
          <div className="required field">
            <label>Last name</label>
            <input type="text" name="lastname" placeHolder="Last name" />
          </div>
          <div className="required field">
            <label>E-mail</label>
            <input type="text" name="email" placeHolder="E-mail" />
          </div>
          <div className="required field">
            <label>Address</label>
            <input type="text" name="address" placeHolder="Address" />
          </div>
          <div className="required field">
            <label>Phone number</label>
            <input type="text" name="phonenumber" placeHolder="Phone number" />
          </div>
          <br></br>
          <div className="required field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" className="hidden" />
              <label>I agree to the Terms and Conditions</label>
            </div>
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
        </div>
      </div>
    );
  }
}

export default NewUserForm;

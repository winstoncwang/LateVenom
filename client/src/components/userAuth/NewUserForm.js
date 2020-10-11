import React from "react";
import axios from 'axios';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phonenumber: "",
    };
  }

  handleInput = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };

  handleSubmit = async(e) => {
    e.preventDefault();
    console.log('submit button clicked.')
    //AJAX call
    try{
    const data = await axios.post('http://localhost:3000/users',this.state);
    console.log(data)
    }catch(err){
      console.log(err.response)
    }

  };

  render() {
    return (
      <div className="main ui container" style={{ width: "70%" }}>
        <h2 className="ui left aligned blue header">Create an account</h2>
        <br></br>
        <br></br>
        <form
          className="ui form"
          onSubmit={
            this.handleSubmit
          }
        >
          <h4 className="ui dividing header">User Information</h4>
          <div className="required field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInput} />
          </div>
          <div className="required field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>First name</label>
            <input type="text" name="firstname" placeholder="First name" onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>Last name</label>
            <input type="text" name="lastname" placeholder="Last name" onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>E-mail</label>
            <input type="text" name="email" placeholder="E-mail" onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>Address</label>
            <input type="text" name="address" placeholder="Address" onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>Phone number</label>
            <input type="text" name="phonenumber" placeholder="Phone number" onChange={this.handleInput}/>
          </div>
          <br></br>
          <br></br>
            <button className="ui button" type="submit">
              SUBMIT
            </button>
            <button className="ui button" type="cancel">
              CANCEL
            </button>
        </form>
      </div>
    );
  }
}

export default NewUserForm;

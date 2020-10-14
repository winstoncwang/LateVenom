import React from "react";
import axios from 'axios';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
              username: "",
              password: "",
              firstname: "",
              lastname: "",
              email: "",
              address: "",
              phonenumber: "",
            },
      isSubmitting:false,
      validationError:{},
      messageOpen:false
    };
  }

  componentDidUpdate=()=>{  }

  handleInput = (e) => {
    let form = {...this.state.form}
    form[e.target.name]=e.target.value;
    this.setState({form})
  };

  handleSubmit = async(e) => {
    e.preventDefault();
    console.log('submit button clicked.')
    console.log(this.state.form)
    //AJAX call
    try{
    const data = await axios.post('http://localhost:5000/users',this.state.form);
    console.log(data)
    }catch(err){
      if(err.response.data){
      this.setState({validationError:err.response.data})
      this.setState({messageOpen:true})
      }
      console.log(this.state.validationError,this.state.messageOpen)
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
            <input type="text" name="username" placeholder="Username" value={this.state.form.username} onChange={this.handleInput} />
            <div className="ui pointing red basic label">
              That name is taken!
            </div>
          </div>
          <div className="required field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={this.state.form.password} onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>First name</label>
            <input type="text" name="firstname" placeholder="First name" value={this.state.form.firstname} onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>Last name</label>
            <input type="text" name="lastname" placeholder="Last name" value={this.state.form.lastname} onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>E-mail</label>
            <input type="text" name="email" placeholder="E-mail" value={this.state.form.email} onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>Address</label>
            <input type="text" name="address" placeholder="Address" value={this.state.form.address} onChange={this.handleInput}/>
          </div>
          <div className="required field">
            <label>Phone number</label>
            <input type="text" name="phonenumber" placeholder="Phone number" value={this.state.form.phonenumber} onChange={this.handleInput}/>
          </div>

          <div className={`ui negative message ${ this.state.messageOpen ? '':'hidden'}`}>
            <i className="close icon" onClick={()=>{this.setState({messageOpen:false});}}></i>
            <div className="header">
              We're sorry we can't apply that discount
            </div>
            <p>
              That offer has expired
            </p>
          </div>

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

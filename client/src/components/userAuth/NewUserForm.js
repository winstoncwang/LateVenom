import React from "react";
import axios from 'axios';
import InputError from './InputError'

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
      validationError:{
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        phonenumber: "",
      },
      messageOpen:false,
      userExist:false
    };
  }

  componentDidUpdate=()=>{  }

  handleOnChange = async(e) => {
    let form = {...this.state.form}
    form[e.target.name]=e.target.value;
    this.setState({form})

    //validate existing username
    if(e.target.name==='username' && e.target.value.length>0){
      try{
        const data = await axios.get(`http://localhost:5000/users/${e.target.value}`)
        console.log("user:",data)
        if(data){
        this.setState({userExist:true})
        }
      }catch(err){
        throw new Error (err)
      }
    }
  };

  //onBlur validation
  handleOnBlur = (e)=>{
        //client validation
    if(e.target.value.length===0){
      let validationError = {...this.state.validationError}
      validationError[e.target.name]=`${e.target.name} can not be empty`
      this.setState({validationError:validationError})
    }else{
      let validationError = {...this.state.validationError}
      validationError[e.target.name]="";
      this.setState({validationError})
    }
    console.log(this.state.validationError)
  }

  handleOnSubmit = async(e) => {
    e.preventDefault();
    //AJAX call

    try{
    const data = await axios.post('http://localhost:5000/users',this.state.form);
    console.log("data: ",data)
    }catch(err){
      if(err.response.data){
      this.setState({validationError:err.response.data})
      this.setState({messageOpen:true})
      }
      console.log(err,this.state.validationError,this.state.messageOpen)
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
            this.handleOnSubmit
          }
        >
          <h4 className="ui dividing header">User Information</h4>
          <div className="required field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" value={this.state.form.username} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
            <InputError error={this.state.validationError.username}/>
          </div>
          <div className="required field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={this.state.form.password} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.password}/>
          </div>
          <div className="required field">
            <label>First name</label>
            <input type="text" name="firstname" placeholder="First name" value={this.state.form.firstname} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.firstname}/>
          </div>
          <div className="required field">
            <label>Last name</label>
            <input type="text" name="lastname" placeholder="Last name" value={this.state.form.lastname} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.lastname}/>
          </div>
          <div className="required field">
            <label>E-mail</label>
            <input type="text" name="email" placeholder="E-mail" value={this.state.form.email} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.email}/>
          </div>
          <div className="required field">
            <label>Address</label>
            <input type="text" name="address" placeholder="Address" value={this.state.form.address} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.address}/>
          </div>
          <div className="required field">
            <label>Phone number</label>
            <input type="text" name="phonenumber" placeholder="Phone number" value={this.state.form.phonenumber} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.phonenumber}/>
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

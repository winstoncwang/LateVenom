import React from "react";
import axios from 'axios';
import history from '../../history'
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
        
        console.log(data.data)
        if(data.data.length!==0){
          this.setState({userExist:true})

          let validationError = {...this.state.validationError}
          validationError.username="username already exists, please try again";
          this.setState({validationError})
        }else{
          this.setState({userExist:false})

          let validationError = {...this.state.validationError}
          validationError.username="";
          this.setState({validationError})
        }
      }catch(err){
        console.log('networkcheck: ',err.message==="Network Error")
        if(err.message==="Network Error"){
          history.push('/errors')
        }
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
      if(!this.state.userExist){
      let validationError = {...this.state.validationError}
      validationError[e.target.name]="";
      this.setState({validationError})
      }
    }
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
        <div data-testid="error-message" className={`ui negative message ${ this.state.messageOpen ? '':'hidden'}`}>
            <i className="close icon" onClick={()=>{this.setState({messageOpen:false});}}></i>
            <div className="header">
              Error
            </div>
            <p>
              Please check the information below
            </p>
          </div>
        <form
          className="ui form"
          onSubmit={
            this.handleOnSubmit
          }
        >
          <h4 className="ui dividing header">User Information</h4>
          <div className={`required field input ${this.state.validationError.username.length? "error":""}`}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" placeholder="Username" value={this.state.form.username} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
            <InputError error={this.state.validationError.username}/>
          </div>
          <div className="required field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" value={this.state.form.password} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.password}/>
          </div>
          <div className="required field">
            <label htmlFor="firstname">First name</label>
            <input id="firstname" type="text" name="firstname" placeholder="First name" value={this.state.form.firstname} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.firstname}/>
          </div>
          <div className="required field">
            <label htmlFor="lastname">Last name</label>
            <input id="lastname" type="text" name="lastname" placeholder="Last name" value={this.state.form.lastname} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.lastname}/>
          </div>
          <div className="required field">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" name="email" placeholder="E-mail" value={this.state.form.email} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.email}/>
          </div>
          <div className="required field">
            <label htmlFor="address">Address</label>
            <input id="address" type="text" name="address" placeholder="Address" value={this.state.form.address} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.address}/>
          </div>
          <div className="required field">
            <label htmlFor="phonenumber">Phone number</label>
            <input id="phonenumber" type="text" name="phonenumber" placeholder="Phone number" value={this.state.form.phonenumber} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
            <InputError error={this.state.validationError.phonenumber}/>
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

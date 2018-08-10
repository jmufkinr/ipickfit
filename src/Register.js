import React from "react";
import axios from 'axios';

class Register extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    //initialize the state
    this.state = {
      firstName: ""
      , lastName: ""
      , email: ""
      , password1: ""
      , password2: ""
    };

    this.inputEventHandler = this.inputEventHandler.bind(this);
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
  }

  inputEventHandler(event) {
    // change this.state.formData.email or password to value
    const target = event.target;
    const name = target.id;
    const value = target.value;

    // sets the state
    this.setState({
      [name]: value
    });
  }

  onSubmitButtonClick() {
    //read the data from the state?
    const data = {
      firstName: this.state.firstName
      , lastName: this.state.lastName
      , email: this.state.email
      , password1: this.state.password1
      , password2: this.state.password2
    };

    //call axios here send a post request
    axios({
      method: 'post',
      url: "https://pacoima-ypi.azurewebsites.net/api/users/register/employer",
      data: data,
      withCredentials: true
    })
      .then(console.log)
      .catch(console.error)
  }   //end of register click

  // step 2. create a function that returns html
  render() {
    return (
      <div className="row">
      <h1>Registration Page</h1>
        <form className="col-md-6">       
          <div className="form-group">
            <label htmlFor="inputFirstName">First Name:</label>
            <input className="form-control" type="text" value={this.state.firstName} placeholder="Enter first name" id="firstName" maxLength="15" onChange={this.inputEventHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="inputLastName">Last Name:</label>
            <input className="form-control" type="text" value={this.state.lastName} placeholder="Enter last name" id="lastName" maxLength="10" onChange={this.inputEventHandler} />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password:</label>
            <input type="password" className="form-control" id="password" value={this.state.password1} placeholder="minimum 6 Caracters and one number" onChange={this.inputEventHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password:</label>
            <input type="password" className="form-control" value={this.state.password2} id="confirmPassword" placeholder="password must match above password" onChange={this.inputEventHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail1">Email address:</label>
            <input type="email" className="form-control" value={this.state.email} id="email" placeholder="Email" onChange={this.inputEventHandler} />
          </div>

          <div className="btnContainer">
            <p>
              <button type="button" id="btnSubmit" className="btn btn-default btn-primary" onClick={this.onSubmitButtonClick}>Register</button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;

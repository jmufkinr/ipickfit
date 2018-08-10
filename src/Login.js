import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  inputEventHandler = () => {
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h1>Login Page</h1>
          <form className="col-md-6">

            <div className="form-group">
              <label htmlFor="inputEmail1">Email address:</label>
              <input type="email" className="form-control" value={this.state.email} id="email" placeholder="Email" onChange={this.inputEventHandler} />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password:</label>
              <input type="password" className="form-control" id="password" value={this.state.password1} placeholder="minimum 6 Caracters and one number" onChange={this.inputEventHandler} />
            </div>

            <div className="btnContainer">
              <p>
                <button type="button" id="btnSubmit" className="btn btn-default btn-primary" onClick={this.onSubmitButtonClick}>Register</button>
              </p>
            </div>
          </form>
        </div>

      </React.Fragment>
    )
  }
}

export default Login;
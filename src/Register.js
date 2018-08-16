import React from "react";
// import axios from 'axios';
import { onChange, showFormErrors } from "../src/helpers/validation.helper";
import { connect } from "react-redux";
import { addIPickFit } from "./actions/ipickfit";


class Register extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    //initialize the state
    this.state = {
      formData: {
        firstName: ""
        , lastName: ""
        , email: ""
        , password1: ""
        , password2: ""
      }
      , errors: {}
    };

    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
    this.submitHandler = onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onCancel(e) {
    this.props.history.goBack();
  }

  onSave(e) {
    debugger;
    if (!showFormErrors.call(this)) {
      return;
    }

    //read the data from the state?
    const data = {
      firstName: this.state.formData.firstName
      , lastName: this.state.formData.lastName
      , email: this.state.formData.email
      , password1: this.state.formData.password1
      , password2: this.state.formData.password2
    };

  }   //end of register click

  submitHandler(event) {
    // change this.state.formData.email or password to value
    const target = event.target;
    const name = target.id;
    const value = target.value;

    // sets the state
    this.setState(prevState => {
      const newFormData = {
        ...prevState.formData, [name]:
          value
      };
      return { formData: newFormData };
    });
  }

  onDelete(event) {
    // const id = this.state.formData._id;

    // ipickfitService
    //   .del(id)
    //   .then(() => {
    //     this.props.history.goBack();
    //   })
    //   .catch(err => console.log(err));
  }

  // step 2. create a function that returns html
  render() {
    return (
      <div className="row">
        <header className="masthead">

          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">

              <h1>Registration Page</h1>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form
                  className="col-md-6"

                  id="basic-validate"
                  action="#"
                  novalidate="novalidate">

                  <div className="form-body ">
                  <img src="data:image/jpeg;base64,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" className="img-fluid" alt="" /> 
                    <div className="form-group">
                      <label
                        id="firstNameLabel"
                        htmlFor="firstName">First Name:</label>
                      <input
                        name="firstName"
                        className="form-control"
                        ref="firstName"
                        type="text"
                        value={this.state.formData.firstName}
                        placeholder="Enter First Name"
                        id="firstName"
                        onChange={this.submitHandler}
                        required />
                    </div>
                    <div>{this.state.errors && this.state.errors.firstName}</div>
                  </div>

                  <div className="form-body">
                    <div className="form-group">
                      <label
                        id="lastNameLabel"
                        htmlFor="lastName">Last Name:</label>
                      <input
                        className="form-control"
                        name="lastName"
                        ref="lastName"
                        type="text"
                        value={this.state.formData.lastName}
                        placeholder="Enter Last Name"
                        id="lastName"
                        onChange={this.submitHandler}
                        required />
                    </div>
                    <div>{this.state.errors && this.state.errors.lastName}</div>
                  </div>

                  <div className="form-body">
                    <div className="form-group">
                      <label
                        id="password1Label"
                        htmlFor="password1">Password:</label>
                      <input
                        type="password"
                        name="password1"
                        className="form-control"
                        ref="password1"
                        id="password1"
                        value={this.state.formData.password1}
                        placeholder="minimum 6 Caracters and one number"
                        onChange={this.submitHandler}
                        required />
                    </div>
                    <div>{this.state.errors && this.state.errors.password1}</div>
                  </div>

                  <div className="form-body">
                    <div className="form-group">
                      <label
                        id="password2Label"
                        htmlFor="password2">Confirm Password:</label>
                      <input
                        type="password"
                        name="password2"
                        ref="password2"
                        className="form-control"
                        value={this.state.formData.password2}
                        id="password2"
                        placeholder="password must match above password"
                        onChange={this.submitHandler}
                        required />
                    </div>
                    <div>{this.state.errors && this.state.errors.password2}</div>
                  </div>

                  <div className="form-body">
                    <div className="form-group">
                      <label
                        id="emailLabel"
                        htmlFor="email">Email address:</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        ref="email"
                        value={this.state.formData.email}
                        id="email"
                        placeholder="Email"
                        onChange={this.submitHandler}
                        required />
                    </div>
                    <div>{this.state.errors && this.state.errors.email}</div>
                  </div>

                  <div className="btnContainer">
                    <p>
                      <button
                        type="button"
                        id="btnSubmit"
                        className="btn btn-default btn-primary"
                        onClick={this.onSave}>Register
                    </button>

                      <button
                        type="button"
                        onClick={this.onCancel}
                        className="btn btn-default btn-sm">
                        Cancel
                    </button>

                      <button
                        type="button"
                        onClick={() => this.onDelete()}
                        className="btn btn-danger btn-sm">
                        Delete
                    </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </header>

        {/* <!-- About Section --> */}
        <section id="about" class="about-section text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-white mb-4">Built with Bootstrap 4</h2>
                <p class="text-white-50">Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
              <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
              </div>
            </div>
            <img src="img/ipad.png" class="img-fluid" alt="" />
          </div>
        </section>

        {/* <!-- Projects Section --> */}
        <section id="projects" class="projects-section bg-light">
          <div class="container">

            {/* <!-- Featured Project Row --> */}
            <div class="row align-items-center no-gutters mb-4 mb-lg-5">
              <div class="col-xl-8 col-lg-7">
                <img class="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt="" />
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                  <h4>Shoreline</h4>
                  <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                </div>
              </div>
            </div>

            {/* <!-- Project One Row --> */}
            <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div class="col-lg-6">
                <img class="img-fluid" src="img/demo-image-01.jpg" alt="" />
              </div>
              <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-left">
                      <h4 class="text-white">Misty</h4>
                      <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                      <hr class="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project Two Row --> */}
            <div class="row justify-content-center no-gutters">
              <div class="col-lg-6">
                <img class="img-fluid" src="img/demo-image-02.jpg" alt="" />
              </div>
              <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-right">
                      <h4 class="text-white">Mountains</h4>
                      <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                      <hr class="d-none d-lg-block mb-0 mr-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- Signup Section --> */}
        <section id="signup" class="signup-section">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 mx-auto text-center">

                <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 class="text-white mb-5">Subscribe to receive updates!</h2>

                <form class="form-inline d-flex">
                  <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..." />
                  <button type="submit" class="btn btn-primary mx-auto">Subscribe</button>
                </form>

              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section class="contact-section bg-black">
          <div class="container">

            <div class="row">

              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Address</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      <a href="#">Twentynine Palms, CA</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-envelope text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Email</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      <a href="#">ipickfitdanielle@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-mobile-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Phone</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      <a href="#">+1 (951) 970-6287</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="social d-flex justify-content-center">
              <a href="#" class="mx-2">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="mx-2">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="mx-2">
                <i class="fab fa-github"></i>
              </a>
            </div>

          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer class="bg-black small text-center text-white-50">
          <div class="container">
            Copyright &copy; Your Website 2018
      </div>
        </footer>

        {/* <!-- Bootstrap core JavaScript --> */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Plugin JavaScript --> */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* <!-- Custom scripts for this template --> */}
        <script src="js/grayscale.min.js"></script>

      </div>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddIPickFit: ipickfit => {
    dispatch(addIPickFit(ipickfit));
  }
});

//export default IPickFitsList;
export default connect(null, mapDispatchToProps)(Register);

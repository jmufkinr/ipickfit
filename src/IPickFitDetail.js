import React from "react";
// import * as ipickfitService from "../../services/ipickfit.service";
import { onChange, showFormErrors } from "../src/helpers/validation.helper";
// import PageHeader from "../../components/PageHeader"

class IPickFitDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        // _id: "",
        name: ""
      },
      errors: {}
    };

    this.submitHandler = onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    // if (this.props.match.params.id) {
    //   ipickfitService.readById(this.props.match.params.id)
    //     .then(data => {
    //       this.setState({ formData: data.item });
    //     });
    // }
  }

  onCancel(e) {
    this.props.history.goBack();
  }

  onSave(event) {
    if (!showFormErrors.call(this)) {
      return;
    }

    let item = {
      name: this.state.formData.name
    };

    // if (this.props.match.params.id) {
    //   item._id = this.state.formData._id;
    //   ipickfitService
    //     .update(item)
    //     .then(data => {
    //       this.props.history.goBack();
    //     })
    //     .catch(error => console.log(error));
    // } else {
    //   ipickfitService
    //     .create(item)
    //     .then(data => {
    //       this.props.history.goBack();
    //     })
    //     .catch(error => console.log(error));
    // }
  }

  submitHandler(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => {
      const newFormData = { ...prevState.formData, [name]: value };
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

  render() {
    return (
      <React.Fragment>
        {/* <PageHeader parentsTitle="ipickfit detail" parentsDescription="Edit employed ipickfit" /> */}
        <div className="row">
          <div className="masthead">
            <div className="container d-flex h-100 align-items-center">
              <div className="mx-auto text-center">
                {/* <div className="pull-left"> */}
                <h1>I Pick Fit Detail</h1>
              </div>
              <div className="pull-right">

              </div>
              <div className="clearfix" />
            </div>
            <div className="panel-body no-padding">
              <form
                className="form-horizontal form-bordered"

                id="basic-validate"
                action="#"
                novalidate="novalidate">

                <div className="form-body">
                  <div className="form-group">
                    <label
                      className="col-sm-3 control-label"
                      htmlFor="name"
                      id="nameLabel">
                      Name
                      </label>
                    <div className="col-sm-7">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        ref="name"
                        className="form-control input-sm"
                        placeholder="Enter Name"
                        value={this.state.formData.name}
                        onChange={this.submitHandler}
                        required
                      />
                    </div>
                    <div>{this.state.errors && this.state.errors.name}</div>
                  </div>

                  {/* <div className="form-group">
                      <label
                        className="col-sm-3 control-label"
                        htmlFor="itemId"
                        id="itemLabel"
                      >
                        ipickfit Id
                      </label>
                      <div className="col-sm-7">
                        <pre>{this.state.formData._id}</pre>
                      </div>
                    </div> */}
                </div>
                <div className="form-footer">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={this.onSave}
                      className="btn btn-primary btn-sm">
                      Save
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

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
          <div className="container">
            <div className="row">
              <div className="mx-auto text-center">
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                  <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <form class="form-inline d-flex">
                    <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..." />
                    <button type="submit" class="btn btn-primary mx-auto">Subscribe</button>
                  </form>
                </div>
                
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

        {/* </div> */}
      </React.Fragment >
    );
  }
}

export default IPickFitDetail;

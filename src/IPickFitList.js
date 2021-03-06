import React from "react";
import { Link } from "react-router-dom";
// import * as ipickfitService from "../../services/ipickfit.service";
// import PageHeader from "../../components/PageHeader";
import { connect } from "react-redux";
import { addIPickFit } from "./actions/ipickfit";

// const baseUrl = process.env.REACT_APP_ADMIN_DATA_URL;

class IPickFitList extends React.Component {
  constructor(props) {
    //props= {
    //   onAddIPickFit: function(){
    // talk to the global redux store
    //   }
    // }
    super(props);
    this.state = {
      ipickfit: [],
    };
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    // ipickfitService.readAll().then(data => {
    //   this.setState({ ipickfit: data.items });
    // });
  }

  onSelect(item, event) {
    event.preventDefault();
    this.props.history.push("/ipickfit/detail/" + item.email);

    //communicating with the central store
    this.props.onAddIPickFit(item);
  }

  render() {
    const List = this.state.ipickfit ? (
      this.state.ipickfit.map(ipickfit => (
        // <li key={ipickfit._id} onClick={this.onSelect.bind(this, ipickfit)}>
        //   {ipickfit.name}
        // </li>
        <tr key={ipickfit.email} onClick={this.onSelect.bind(this, ipickfit)}>
          {/* <td>{ipickfit._id}</td> */}
          <td>{ipickfit.firstName}</td>
          <td>{ipickfit.lastName}</td>
          <td>{ipickfit.email}</td>
        </tr>
      ))
    ) : (
        <React.FragmenBt />
      );

    return (
      <React.Fragment>
        {/* <PageHeader parentsTitle="IPickFit list" parentsDescription="Currently employed ipickfit" /> */}
        <div className="row">
        <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
            <h1>IPickFit List</h1>
            <Link to={`/register`}>New</Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>{List}</tbody>
            </table>
            </div>
          </div>
          </header>
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


      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddIPickFit: ipickfit => {
    dispatch(addIPickFit(ipickfit));
  }
});

//export default IPickFitsList;
export default connect(null, mapDispatchToProps)(IPickFitList);

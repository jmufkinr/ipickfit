import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// step 4 import component file using relative paths
import Cardio from './Cardio';
import LowerBody from './LowerBody';
import UpperBody from './UpperBody';

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About I Pick Fit</h2>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Workout Video Links</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/cardio`}>
//           Cardio
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/lower-body`}>
//           Lower Body
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/upper-body`}>
//           Upper Body
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please Select a link by category.</h3>
//     )}/>
//   </div>
// )

class WorkoutVideoLinks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        {/* <!-- Navigation --> */}
        {/* <div className="row"> */}
        <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
            <h1>Video Links</h1>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">               
                  {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button> */}
                  {/* <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#signup">Contact</a>
            </li>
          </ul>
        </div> */}
                  <Router>
                    {/* <div className="container "style={{"backgroundColor": "#9ACFB4"}} > */}
                    <form >
                      <div className="topnav" style={{ "text-align": "center" }}>
                        <Link to="/cardio">&emsp;&emsp;Cardio&emsp;</Link>
                        <Link to="/lower-body">&emsp;&emsp;Lower Body&emsp;</Link>
                        <Link to="/upper-body">&emsp;&emsp;Upper Body&emsp;</Link>


                        <Route path="/cardio" component={Cardio} />
                        <Route path="/lower-body" component={LowerBody} />
                        <Route path="/upper-body" component={UpperBody} />
                      </div>
                      <img src="https://static.wixstatic.com/media/68ffc3_d447dc053afc4992a223daee7c2f352e~mv2.jpg" className="img-fluid" alt="" />  
                    </form>
                    {/* </div> */}
                  </Router>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* <!-- About Section --> */}
        <section id="about" className="about-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
                <p className="text-white-50">Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
              <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
              </div>
            </div>
            <img src="img/ipad.png" className="img-fluid" alt="" />
          </div>
        </section>

        {/* <!-- Projects Section --> */}
        <section id="projects" className="projects-section bg-light">
          <div className="container">

            {/* <!-- Featured Project Row --> */}
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img className="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt="" />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4>Shoreline</h4>
                  <p className="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                </div>
              </div>
            </div>

            {/* <!-- Project One Row --> */}
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-lg-6">
                <img className="img-fluid" src="img/demo-image-01.jpg" alt="" />
              </div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">Misty</h4>
                      <p className="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                      <hr className="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project Two Row --> */}
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6">
                <img className="img-fluid" src="img/demo-image-02.jpg" alt="" />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">Mountains</h4>
                      <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                      <hr className="d-none d-lg-block mb-0 mr-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- Signup Section --> */}
        <section id="signup" className="signup-section">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 mx-auto text-center">

                <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

                <form className="form-inline d-flex">
                  <input type="email" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..." />
                  <button type="submit" className="btn btn-primary mx-auto">Subscribe</button>
                </form>

              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section className="contact-section bg-black">
          <div className="container">

            <div className="row">

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Address</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <a href="#">Twentynine Palms, CA</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-envelope text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <a href="#">ipickfitdanielle@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Phone</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <a href="#">+1 (951) 970-6287</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="social d-flex justify-content-center">
              <a href="#" className="mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-github"></i>
              </a>
            </div>

          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer className="bg-black small text-center text-white-50">
          <div className="container">
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
      </React.Fragment>
    )
  }
}
export default WorkoutVideoLinks;




import React from "react";

// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// step 4 import component file using relative paths
// import Home from "./Home";
// import Login from "./Login";
// import About from "./About";
// import Register from "./Register";
// import WorkoutVideoLinks from "./WorkoutVideoLinks";
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

    this.state = {

    }
  }

   

  render() {
    return (     
        <React.Fragment>
    {/* <!-- Navigation --> */}
    <div className="row">
    <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button> */}
        {/* <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
            </li>
          </ul>
        </div> */}
         <Router>
    <div className="container "style={{"backgroundColor": "#9ACFB4"}} >
      <form >
    <div className="topnav">      
        <Link to="/cardio">&emsp;&emsp;Cardio&emsp;</Link>
        <Link to="/lower-body">&emsp;&emsp;Lower Body&emsp;</Link>
        <Link to="/upper-body">&emsp;&emsp;Upper Body&emsp;</Link>      
      

      <Route path="/cardio" component={Cardio}/>
      <Route path="/lower-body" component={LowerBody}/>
      <Route path="/upper-body" component={UpperBody}/>
    </div>
    </form>
    </div>
  </Router> 
      </div>
    </nav>
    </div>
    </div>
    </header>
    </div>
    </React.Fragment>
    )
  }
}
    export default WorkoutVideoLinks;




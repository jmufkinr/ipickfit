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



const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About I Pick Fit</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Workout Video Links</h2>
    <ul>
      <li>
        <Link to={`${match.url}/cardio`}>
          Cardio
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/lower-body`}>
          Lower Body
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/upper-body`}>
          Upper Body
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please Select a link by category.</h3>
    )}/>
  </div>
)

const WorkoutVideoLinks = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/cardio">Cardio</Link></li>
        <li><Link to="/lower-body">LowerBody</Link></li>
        <li><Link to="/upper-body">UpperBody</Link></li>
      </ul>

      <hr/>

      <Route exact path="/cardio" component={Cardio}/>
      <Route path="/lower-body" component={LowerBody}/>
      <Route path="/upper-body" component={UpperBody}/>
    </div>
  </Router>
)
export default WorkoutVideoLinks;

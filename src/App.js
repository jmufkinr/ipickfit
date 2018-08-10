import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// step 4 import component file using relative paths
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Register from "./Register";
import WorkoutVideoLinks from "./WorkoutVideoLinks";


const IPickFit = () => (
  <Router>
    <div className="container "style={{"backgroundColor": "#9ACFB4"}} >
      <form >
        <div className="topnav" >        
          <Link to="/">&emsp;&emsp; Home &emsp;</Link>
          <Link to="/login">&emsp;&emsp;Login&emsp;</Link>
          <Link to="/register">&emsp;&emsp;Register&emsp;</Link>
          <Link to="/about">&emsp;&emsp;About&emsp;</Link>
          {/* <Link to="/app">&emsp;&emsp;App&emsp;</Link>*/}
          <Link to="/cardio">&emsp;&emsp;Workout Video Links&emsp;</Link>          
          {/* <Link to="/listItems">&emsp;&emsp;List Items&emsp;</Link> */}
          
          &emsp;&emsp;
        
        <button type="button" className="btn btn-default btn-xs" id="btn-logOut">Log Out</button>
          <hr />


          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/workout-video-links" component={WorkoutVideoLinks} />
          <Route path="/cardio" component={WorkoutVideoLinks} />
          {/* <Route path="/listItems" component={listItems} /> */}

                </div>
      </form>
    </div>
  </Router>
);
export default IPickFit;

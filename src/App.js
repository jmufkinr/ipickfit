import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
// step 4 import component file using relative paths
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Register from "./Register";
import WorkoutVideoLinks from "./WorkoutVideoLinks";
import IPickFitList from "./IPickFitList";
import IPickFitDetail from "./IPickFitDetail";
import IPickFitHistoryList from "./IPickFitHistoryList";

// import Cardio from "./Cardio";
// import LowerBody from "./LowerBody";
// import UpperBody from "./UpperBody";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducedStore from "./reducers";


const store = createStore(reducedStore);



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Router>
            {/* <div className="container " > */}
            <div className="row">
              <form >
                <div className="topnav" style={{ "backgroundColor": "#9ACFB4", "textAlign": "center" }} >
                  <Link to="/">&emsp;&emsp; Home &emsp;</Link>
                  <Link to="/login">&emsp;&emsp;Login&emsp;</Link>
                  <Link to="/register">&emsp;&emsp;Register&emsp;</Link>
                  <Link to="/about">&emsp;&emsp;About&emsp;</Link>
                  {/* <Link to="/app">&emsp;&emsp;App&emsp;</Link>*/}
                  <Link to="/workout-video-links">&emsp;&emsp;Workout Video Links&emsp;</Link>
                  <Link to="/ipickfit-list">&emsp;&emsp;List&emsp;</Link>
                  <Link to="/ipickfit-detail">&emsp;&emsp;Detail&emsp;</Link>
                  <Link to="/ipickfit-history-list">&emsp;&emsp;Redux History&emsp;</Link>

                  {/* <Link to="/listItems">&emsp;&emsp;List Items&emsp;</Link> */}

                  &emsp;&emsp;
                  <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-default btn-xs"
                    id="btn-logOut">
                    Log Out
                  </button>
                  </Link>

                  <hr />

                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/about" component={About} />
                  <Route path="/workout-video-links" component={WorkoutVideoLinks} />
                  <Route path="/ipickfit-list" component={IPickFitList} />
                  <Route path="/ipickfit-detail" component={IPickFitDetail} />
                  <Route path="/ipickfit-history-list" component={IPickFitHistoryList} />

                  {/* <Route path="/cardio" component={Cardio} />
          <Route path="/lower-body" component={LowerBody} />
          <Route path="/upper-body" component={UpperBody} /> */}
                  {/* <Route path="/listItems" component={listItems} /> */}

                </div>
              </form>
            </div>
          </Router>
        </React.Fragment>
      </Provider>
    );
  }
}
export default App;

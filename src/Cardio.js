import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LowerBody from './LowerBody';
import UpperBody from './UpperBody';


class Cardio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <h3>Cardio</h3>
            <ul>
              {/* <li><Link to="/cardio">Cardio</Link></li> */}
              <li><Link to="/lower-body">Lower Body</Link></li>
              <li><Link to="/upper-body">Upper Body</Link></li>
            </ul>

            <hr />

            {/* <Route path="/cardio" component={Cardio} /> */}
            <Route path="/lower-body" component={LowerBody} />
            <Route path="/upper-body" component={UpperBody} />
            </div>
          </Router>
        </React.Fragment>
          )
        }
      }
      
export default Cardio;
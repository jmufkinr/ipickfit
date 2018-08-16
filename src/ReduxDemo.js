import React, { Component } from 'react'
import IPickFitHistoryList from '../crud/IPickFitHistoryList';
import { Tabs, Tab } from 'react-bootstrap';


export class ReduxDemo extends Component {
  render() {
    return (
      <React.Fragment>
        
        <Tabs defaultActiveKey={3} id="uncontrolled-tab-example">
           <Tab eventKey={1} title="I Pick Fit History">
             <IPickFitHistoryList />
           </Tab>         
        </Tabs>


      </React.Fragment>

    )
  }
}

export default ReduxDemo

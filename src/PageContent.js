import React from "react";
import Home from "./react-ipickfit/src/Home";

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <React.Fragment>
        <section id="page-content">

          <div classNmae="animated fadeIn">
            <h3>HOME</h3>
            <Route exact path="/" component={Home} />
          </div>
          
        </section>
      </React.Fragment>
    );
  };
}
export default PageContent;
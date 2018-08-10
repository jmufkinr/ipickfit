import React from "react";
import { Link } from "react-router-dom";
import SidebarLinksGroupedByRole from "./SidebarLinksGroupedByRole";
import { groupedRoutes } from "../constants/dashboard-routes.constant";
import { Route, withRouter } from "react-router-dom";

const baseUrl = process.env.REACT_APP_ADMIN_DATA_URL;

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''
    }
  }

  componentWillReceiveProps(futureProps) {
    if (futureProps.currentUser !== this.props.currentUser) {
      this.setState({
        currentUser: futureProps.currentUser
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        {/*

            START @SIDEBAR LEFT
            |=========================================================================================================================|
            |  TABLE OF CONTENTS (Apply to sidebar left class)                                                                        |
            |=========================================================================================================================|
            |  01. sidebar-box               |  Variant style sidebar left with box icon                                              |
            |  02. sidebar-rounded           |  Variant style sidebar left with rounded icon                                          |
            |  03. sidebar-circle            |  Variant style sidebar left with circle icon                                           |
            |=========================================================================================================================|

            */}
        <aside
          id="sidebar-left"
          className="sidebar-circle">
          {/* Start left navigation - profile shortcut */}
          <div id="tour-8" className="sidebar-content">
            <div className="media">
              <Link
                className="pull-left has-notif avatar"
                to={'/users/' + this.state.currentUser._id}
              >
                <img
                  src={localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).imageUploadUrl ? JSON.parse(localStorage.getItem('user')).imageUploadUrl : 'https://www.mindvoize.com/images/userImage.png'}
                  alt="admin"
                  width="50px"
                  height="50px"
                />
                <i className="online" />
              </Link>
              <div className="media-body">
                <h4 className="media-heading">
                  Hello, <span>{this.props.currentUser.firstName}</span>
                </h4>
                <small>{this.props.currentUser.title}</small>
              </div>
            </div>
          </div>
          {/* /.sidebar-content */}
          {/* / End left navigation -  profile shortcut */}

          {/* Start left navigation - menu */}
          <ul id="tour-9" className="sidebar-menu">
            {/* Start navigation - dashboard */}
            {/* Start of Dashboard It Section */}

            <li className="submenu active">
              <a href={null}>
                <span className="icon">
                  <i className="fa fa-home" />
                </span>
                <span className="text">Dashboard</span>
              </a>
              <ul>
                <li className={this.props.location.pathname === "/projects/proposal-wizard" ? "active" : ""}>
                  <Link to="/projects/proposal-wizard" >New Proposal</Link>
                </li>

                {/* start of general announcements */}
                <li className={this.props.location.pathname === "/announcements" ? "active" : ""}>
                  <Link to="/announcements">General Announcements</Link>
                </li>
                {/* end of general announcements */}
                <li className={this.props.location.pathname === "/users/" + this.state.currentUser._id ? "active" : ""}>
                  <Link to={'/users/' + this.state.currentUser._id}>My Profile</Link>
                </li>
                <li className={this.props.location.pathname === "/users/" + this.state.currentUser._id + "/edit" ? "active" : ""}>
                  <Link to={'/users/' + this.state.currentUser._id + '/edit'}>Edit My Profile</Link>
                </li>
                {/* start Category Contact Us  */}
                <li className={this.props.location.pathname === "/contact-form" ? "active" : ""}>
                  <Link to="/contact-form">Contact Us</Link>
                </li>
                {/* end category Contact Us */}
              </ul>
            </li>
            {/* / End navigation - dashboard */}

            {/* End of Admin IT Section */}

            {/* start of Admin Data Management */}
            {
              this.state.currentUser.isItAdmin ?
                <li className="submenu active">
                  <a href={null}>
                    <span className="icon">
                      <i className="fa fa-pencil" />
                    </span>
                    <span className="text">Admin Data Mngmnt</span>
                  </a>
                  <ul>
                    <li className={this.props.location.pathname === baseUrl + "/announcements" ? "active" : ""}>
                      <Link to={`${baseUrl}/announcements`}>Announcements</Link>
                    </li>
                    <li className={this.props.location.pathname === baseUrl + "/departments" ? "active" : ""}>
                      <Link to={`${baseUrl}/departments`}>Departments</Link>
                    </li>
                    <li className={this.props.location.pathname === baseUrl + "/project-queue" ? "active" : ""}>
                      <Link to={`${baseUrl}/project-queue`}>Project Queue</Link>
                    </li>
                    <li className={this.props.location.pathname === baseUrl + "/users" ? "active" : ""}>
                      <Link to={`${baseUrl}/users`}>Users</Link>
                    </li>
                    <li className={this.props.location.pathname === baseUrl + "/evaluations" ? "active" : ""}>
                      <Link to={`${baseUrl}/evaluations`}>Evaluations</Link>
                    </li>
                    {process.env.NODE_ENV === "development" &&
                      <li className={this.props.location.pathname === baseUrl + "/hackers" ? "active" : ""}>
                        <Link to={`${baseUrl}/hackers`}>Hackers</Link>
                      </li>
                    }
                    <li className={this.props.location.pathname === baseUrl + "/developmentTypes" ? "active" : ""}>
                      <Link to={`${baseUrl}/developmentTypes`}>
                        Development Types
                  </Link>
                    </li>
                    <li className={this.props.location.pathname === baseUrl + "/urgencyTypes" ? "active" : ""}>
                      <Link to={`${baseUrl}/urgencyTypes`}>
                        Urgency Types
                  </Link>
                    </li>
                    <li>
                    </li>


                    {/* <li>
                  <Link to="/announcements">General Announcements</Link>
                </li> */}
                    <li >
                      <Link to={`${baseUrl}/carouselImages`}>Carousel Images</Link>
                    </li>
                  </ul>
                </li>
                : null
            }
            {/* / End navigation - dashboard */}

            {/* Start of (It-Admin / board memebers/ Project Manager) Section */}
            {
              this.state.currentUser.isItAdmin ?
                <Route
                  render={props => (
                    <SidebarLinksGroupedByRole
                      groupedRoutes={groupedRoutes.itAdmin}
                    />
                  )}
                />
                : null
            }
            {
              this.state.currentUser.isBoardMember ?
                <Route
                  render={props => (
                    <SidebarLinksGroupedByRole
                      groupedRoutes={groupedRoutes.boardMember}
                    />
                  )}
                />
                : null
            }
            {
              this.state.currentUser.isProjectManager ?
                <Route
                  render={props => (
                    <SidebarLinksGroupedByRole
                      groupedRoutes={groupedRoutes.projectManager}
                    />
                  )}
                />
                : null
            }
            {/* End of (It-Admin / board memebers/ Project Manager) Section */}
            {/* Start category apps */}

            <li className="submenu active">
              <a href={null}>
                <span className="icon">
                  <i className="fa fa-puzzle-piece" />
                </span>
                <span className="text">Misc</span>
              </a>
              {/* End Categrory Apps */}

              {/* start of Misc -  Board Members */}
              <ul>
                <li className={this.props.location.pathname === "/users/board-members" ? "active" : ""}>
                  <Link to={`/users/board-members`}>
                    Board Members   </Link>
                </li>
                <li className={this.props.location.pathname === "/users/list" ? "active" : ""}>
                  <Link to={`/users/list`}>
                    User List  </Link>
                </li>
                {process.env.NODE_ENV === "development" &&
                  <li className={this.props.location.pathname === "/misc/redux-demo" ? "active" : ""}>
                    <Link to={`/misc/redux-demo`}>
                      Redux Demo  </Link>
                  </li>
                }
              </ul>
            </li>
            {/* / End Misc - User Board Members */}
          </ul>

          {/* /.sidebar-menu */}
          {/* / End left navigation - menu */}

          {/* Start left navigation - footer */}
          <div
            id="tour-10"
            className="sidebar-footer hidden-xs hidden-sm hidden-md"
          >
            <a
              id="setting"
              className="pull-left"
              href={null}
              data-toggle="tooltip"
              data-placement="top"
              data-title="Setting"
            >
              <i className="fa fa-cog" />
            </a>
            <a
              id="fullscreen"
              className="pull-left"
              href={null}
              data-toggle="tooltip"
              data-placement="top"
              data-title="Fullscreen"
            >
              <i className="fa fa-desktop" />
            </a>
            <a
              id="lock-screen"
              data-url="page-signin.html"
              className="pull-left"
              href={null}
              data-toggle="tooltip"
              data-placement="top"
              data-title="Lock Screen"
            >
              <i className="fa fa-lock" />
            </a>
            <a
              id="logout"
              data-url="page-lock-screen.html"
              className="pull-left"
              href={null}
              data-toggle="tooltip"
              data-placement="top"
              data-title="Logout"
            >
              <i className="fa fa-power-off" />
            </a>
          </div>
          {/* /.sidebar-footer */}
          {/* / End left navigation - footer */}
        </aside>
        {/* /#sidebar-left */}
        {/*/ END SIDEBAR LEFT */}
      </React.Fragment>
    );
  }
}

export default withRouter(SidebarLeft);
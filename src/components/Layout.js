import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/auth';

class Layout extends React.Component {
  render() {
    const authorized = _.get(this.props, ['authorizedUser', 'authorized']);
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {authorized && <li><Link to="/users">Users</Link></li>}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li onClick={() => this.logout()}>
                <a>
                  <span className="glyphicon glyphicon-log-out"></span>
                  &nbsp;Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }

  logout() {
    this.props.dispatch(signoutUser());
  }
}


export default connect((state) => {
  const {authorizedUser} = state;
  return {
    authorizedUser
  };
})(Layout);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';

class Users extends Component {

  componentWillMount() {
    this.checkAuth();
  }

  componentDidUpdate() {
    this.checkAuth();
  }

  checkAuth() {
    /*
    * this looks ugly.
    *
    * In angular I would use ui-router's transition hooks to check access rights to navigated route globally
    * and I'd use Role based ACL system to control access.
    *
    * I wonder how to implement the similar thing with react-router..
    * Some people suggest to use react mixins but many people says it is a bad practice.
    *
    * I have to learn it more in order to find the best solution.
    * Until that, I'd keep this one.
    * */
    const authorized = this.isAuthorized();
    if (!authorized) this.props.router.replace('/home');
  }

  isAuthorized() {
    const user = this.props.authorizedUser;
    return user && user.authorized;
  }


  render() {
    const authorized = this.isAuthorized();
    return (
      <div>
        <h1>users</h1>
        {authorized && <UsersList />}
      </div>
    )
  }
}

export default connect((state) => {
  const {authorizedUser} = state;
  return {
    authorizedUser
  };
})(Users);

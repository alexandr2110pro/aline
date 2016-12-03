import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';

import UserInfo  from './UserInfo';

class UsersList extends Component {

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    const {users} = this.props;
    return (
      <table className="table table-bordered">
        <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {users.list.map(user => <UserInfo key={user.email} user={user} />)}
        </tbody>
      </table>
    )
  }
}

export default connect((state) => {
  const {authorizedUser} = state;
  return {
    users: state.users
  };
})(UsersList);

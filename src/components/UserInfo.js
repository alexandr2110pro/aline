import React from 'react';

export default class UserInfo extends React.Component {
  render() {
    const {email, firstName, lastName} = this.props.user;
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
      </tr>
    )
  }
}

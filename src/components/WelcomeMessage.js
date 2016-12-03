import React from 'react';

export default class WelcomeMessage extends React.Component {
  render() {
    const {firstName, lastName} = this.props.user;
    return (
      <div>
        Welcome, {firstName}&nbsp;{lastName}!
      </div>
    )
  }
}


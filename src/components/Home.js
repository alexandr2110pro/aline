import React  from 'react';
import { connect } from 'react-redux';
import WelcomeMessage from './WelcomeMessage';


class Home extends React.Component {
  render() {
    const {authorizedUser} = this.props;
    const showMessage      = authorizedUser && authorizedUser.authorized;
    return (
      <div>
        <h4>Home</h4>
        {showMessage && <WelcomeMessage user={authorizedUser} />}
      </div>
    )
  }
}

export default connect((state) => {
  const {authorizedUser} = state;
  return {
    authorizedUser
  };
})(Home);

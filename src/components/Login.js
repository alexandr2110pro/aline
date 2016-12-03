import React from 'react';
import { connect } from 'react-redux';

import { authorizeUser } from '../actions/auth';

class Login extends React.Component {

  constructor() {
    super();

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.dispatch(authorizeUser({email, password}))
  }

  handleChange(event) {
    this.setState(Object.assign({}, this.state, {
      [event.target.name]: event.target.value
    }));
  }

  render() {
    return (
      <div>
        <h4>Login</h4>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">email:</label>
            <input type="email"
                   className="form-control"
                   id="email"
                   name="email"
                   value={this.state.email}
                   onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input type="password"
                   className="form-control"
                   id="password"
                   name="password"
                   value={this.state.password}
                   onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-default" >Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Login);

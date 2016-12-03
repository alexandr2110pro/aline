import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { sendContactMessage } from '../actions/contact';


class Contact extends React.Component {

  form = {};

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(sendContactMessage(_.mapValues(this.form, el => el.value)));
  }

  render() {
    return (
      <div>
        <h4>Contact From</h4>
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input id="name" className="form-control" ref={node => this.form.name = node} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" className="form-control" ref={node => this.form.email = node} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" className="form-control" ref={node => this.form.message = node} />
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Contact);

import React  from 'react';
import {
  Router,
  Route,
  hashHistory,
} from 'react-router';

import Layout from './Layout';

import Home from './Home';
import Login from './Login';
import Users from './Users';
import Contact from './Contact';


export default class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout} >
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    )
  }
}


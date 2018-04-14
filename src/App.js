import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/pages/home';
import LogIn from './components/pages/login';
import Nav from './components/global/nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />

        </div>
      </Router>
    );
  }
}

export default App;

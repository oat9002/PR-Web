import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import 'element-theme-default';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from '../components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ Home }/>
          <Route path='/test' component={ Contact } />>
        </div>
      </Router>
    );
  }
}

export default App;

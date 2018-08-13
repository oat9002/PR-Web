import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import 'element-theme-default';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApplyJob from '../components/ApplyJob';
import Development from '../components/Development';
import Welfare from '../components/Welfare';
import Evaluation from '../components/Evaluation';
import Progress from '../components/Progress';
import ShouldKnow from '../components/ShouldKnow';
import Budget from '../components/TopMenus/AboutUs/Budget';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ Home }/>
          <Route path='/applyjob' component={ ApplyJob } />
          <Route path='/shouldknow' component={ ShouldKnow } />
          <Route path='/progress' component={ Progress } />
          <Route path='/development' component={ Development } />
          <Route path='/evaluation' component={ Evaluation } />
          <Route path='/welfare' component={ Welfare } />
          <Route path='/aboutus'>
            <Route path='/budget' component={ Budget } />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;

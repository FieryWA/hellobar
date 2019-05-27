import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import HomePage from './pages/Home';
import BupdatePage from './pages/Bupdate';
import BaskPage from './pages/Bask';
import HomeLayout from './layouts/HomeLayout';
import T3Page from './pages/T3';
import T4Page from './pages/T4';
import MajorPage from './pages/Major';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={HomeLayout}>
      <Route path="/" component={HomePage}/>
      <Route path="/t3" component={T3Page}/>
      <Route path="/t4" component={T4Page}/>
      <Route path="/major" component={MajorPage}/>
      <Route path="/bupdate" component={BupdatePage}/>
      <Route path="/bask" component={BaskPage}/>
    </Route>
  </Router>
), document.getElementById('app'));

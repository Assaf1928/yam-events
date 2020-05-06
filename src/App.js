import React from 'react';
<<<<<<< HEAD
//import logo from './logo.svg';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import Card from '../src/Components/card/card'
=======

import './App.css';
import Home from './Containers/Home/Home'
>>>>>>> 9c4def0029b887a79c325a191706d2747d2707cc

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Switch>
      <Route path="/Card" component={Card}></Route>
      </Switch> 
     
=======
      <Home/>
>>>>>>> 9c4def0029b887a79c325a191706d2747d2707cc
    </div>
  );
}

export default withRouter(App);

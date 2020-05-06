import React from 'react';
//import logo from './logo.svg';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import Card from '../src/Components/card/card'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/Card" component={Card}></Route>
      </Switch> 
         </div>
  );
}

export default withRouter(App);

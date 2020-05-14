import React from 'react';
//import logo from './logo.svg';
import { Route, Switch, withRouter} from 'react-router-dom';
import subCategory from '../src/Containers/SubCategory/SubCategory'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/category" component={subCategory}></Route>
      </Switch> 
         </div>
  );
}

export default withRouter(App);

import React from "react";
//import logo from './logo.svg';
<<<<<<< HEAD
import { Route, Switch, withRouter } from "react-router-dom";
import subCategory from "../src/Containers/SubCategory/SubCategory";
import Home from "../src/Containers/Home/Home";
import "./App.css";
=======
import { Route, Switch, withRouter} from 'react-router-dom';
import subCategory from '../src/Containers/SubCategory/SubCategory'
import Home from '../src/Containers/Home/Home'


import './App.css';
>>>>>>> assaf

function App() {
  return (
    <div className="App">
      <Switch>
<<<<<<< HEAD
        <Route path="/category" component={subCategory}></Route>
        <Route path="/home" component={Home}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
=======
      <Route path="/category" component={subCategory}></Route>
      <Route path="/home" component={Home}></Route>
      <Route exact path="/" component={Home}></Route>

      </Switch> 
         </div>
>>>>>>> assaf
  );
}

export default withRouter(App);

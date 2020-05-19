import React from 'react';
//import logo from './logo.svg';
import { Route, Switch, withRouter} from 'react-router-dom';
import subCategory from '../src/Containers/SubCategory/SubCategory';
import Home from  '../src/Containers/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/category" component={subCategory}></Route>
      <Route path="/home" component={Home}></Route>

<<<<<<< HEAD
class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Home  />
      </div>
    );
  }
=======
      </Switch> 
         </div>
  );
>>>>>>> master
}

export default withRouter(App);

import React, { Component } from 'react';

import './App.css';
import Home from './Containers/Home/Home'



class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Home image={this.state.image} />
      </div>
    );
  }
}

export default App;

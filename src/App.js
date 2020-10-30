import React, { Component } from 'react';
import './App.css';
import Row from './Row.js' ; 
import request from './request.js' ; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lets build a Netflix clone today with Clever-Programmer !!!!</h1>
        <Row title = "Netflix Originals" fetchUrl={request.fetchNetflix}/>
        <Row title = "Trending Now" fetchUrl={request.fetchTrending}/> 
      </div>
    );
  }
}

export default App;

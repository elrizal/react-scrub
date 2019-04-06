import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/Jumbotron'
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class App extends Component {
  render() {
    return (
      
      <div className="App">
       <Jumbotron>
      <Top />
     </Jumbotron>
          <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

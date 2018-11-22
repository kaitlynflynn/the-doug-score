import React, { Component } from 'react';
import './App.css';
import CarList from './components/CarList'; //importing in new component which will have our Cars List

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Doug Score - Stats</h1>
        </header>
        <CarList />
      </div>
    );
  }
}

export default App;

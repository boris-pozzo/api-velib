import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import Container from './components/container/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
       	<Header />
       	<Container />
      </div>
    );
  }
}

export default App;

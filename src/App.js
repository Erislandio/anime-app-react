import React, { Component } from 'react';

import './App.css';
import Header from './components/header/Header'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      anime: []
    }
    
  }


  

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

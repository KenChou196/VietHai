import React, { Component } from 'react';
import Header from './component/header';
import About from './component/about';
import Service from './component/service';
import Portfolio from './component/portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Service />
        <Portfolio />
      </div>
    );
  }
}

export default App;

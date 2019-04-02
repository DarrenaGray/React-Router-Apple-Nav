import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import NavWrapper from './components/NavWrapper';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavWrapper}/>
      </div>
    );
  }
}

export default App;

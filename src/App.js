import React, { Component } from 'react';
import Routes from './routes';
import './styles.css';
import Header from './Components/header';

const App = () => (
    <div className="App">
      <Header />
      <Routes />
    </div>
);

export default App;

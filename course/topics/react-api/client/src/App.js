import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

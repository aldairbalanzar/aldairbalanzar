import React, { useState } from 'react';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import './App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
    </div>
  );
}

export default App;

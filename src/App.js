import React, { useState } from 'react';
import Nav from './components/Nav';
import Cover from './components/Cover';
import Projects from './components/Projects';
// import Carousel from './components/Carousel';
import './App.css';
import './App.scss';

function App() {

  const [isNavChanging, setIsChangeNav] = useState(false);

  const changeNav = () => {
        setIsChangeNav(true)
        setTimeout(function(){ setIsChangeNav(false) }, 740);
  };

  return (
    <div className="App">
      <Nav changeNav={changeNav}/>
      <Projects isNavChanging={isNavChanging}/>
      {/* <Carousel /> */}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Nav from './components/Nav';
import Cover from './components/Cover';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import './App.scss';

function App() {
  const [navState, setNavState] = useState(1)
  const [isNavChanging, setNavIsChanging] = useState(false);

  const transitionNav = () => {
        setNavIsChanging(true)
        setTimeout(() => { setNavIsChanging(false) }, 750);
  };

  const handleNavState = (num) => {
    transitionNav()
    setTimeout(() => {setNavState(num)}, 751)
  }

  return (
    <div className="App" >
      <Nav handleNavState={handleNavState}/>
       <Cover isNavChanging={isNavChanging}/>
      {navState === 1 && <Projects isNavChanging={isNavChanging} navState={navState} />}
      {navState === 2 && <About  isNavChanging={isNavChanging} navState={navState} />}
      {navState === 3 && <Contact  isNavChanging={isNavChanging} navState={navState} />}
    </div>
  );
}

export default App;

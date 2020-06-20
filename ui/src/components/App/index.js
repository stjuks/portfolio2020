import React from 'react';
import { GlobalStyle } from './styles';
import FixedBackground from '../FixedBackground';
import Frame from '../Frame';
import Landing from '../Landing';
import Projects from '../Projects';
import About from '../About';

function App() {
  return (
    <>
      <GlobalStyle />
      <FixedBackground />
      <Frame />
      <Landing />
      <Projects />
      <About />
    </>
  );
}

export default App;

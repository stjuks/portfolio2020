import React from 'react';
import { GlobalStyle } from './styles';
import FixedBackground from '../FixedBackground';
import Frame from '../Frame';
import Landing from '../Landing';
import Projects from '../Projects';

function App() {
  return (
    <>
      <GlobalStyle />
      <FixedBackground />
      <Frame />
      <Landing />
      <Projects />
    </>
  );
}

export default App;

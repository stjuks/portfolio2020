import React from 'react';
import { GlobalStyle } from './styles';
import FixedBackground from '../FixedBackground';
import Frame from '../Frame';
import Landing from '../Landing';
import Projects from '../Projects';
import About from '../About';
import Footer from '../Footer';
import Contact from '../Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <FixedBackground />
      <Frame />
      <Landing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

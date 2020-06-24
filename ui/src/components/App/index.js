import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import FixedBackground from '../FixedBackground';
import Frame from '../Frame';
import Landing from '../Landing';
import Projects from '../Projects';
import About from '../About';
import Footer from '../Footer';
import Contact from '../Contact';
import { ViewContextProvider } from '../../util/ViewContext';
import { LocaleContextProvider } from '../../util/LocaleContext';

function App() {
  return (
    <ViewContextProvider>
      <LocaleContextProvider>
        <GlobalStyle />
        <FixedBackground />
        <Frame />
        <Landing />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </LocaleContextProvider>
    </ViewContextProvider>
  );
}

export default App;

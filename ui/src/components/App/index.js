import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import FixedBackground from '../FixedBackground';
import Frame from '../Frame';
import Landing from '../Landing';
import Projects from '../Projects';
import About from '../About';
import Footer from '../Footer';
import Contact from '../Contact';
import ViewContext from '../../util/ViewContext';

function App() {
  const [activeView, setActiveView] = useState(undefined);

  return (
    <ViewContext.Provider value={{ activeView, setActiveView }}>
      <GlobalStyle />
      <FixedBackground />
      <Frame />
      <Landing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </ViewContext.Provider>
  );
}

export default App;

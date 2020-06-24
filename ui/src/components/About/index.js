import React, { useContext } from 'react';
import { AboutContainer } from './styles';
import Section from '../Section';
import { LocaleContext } from '../../util/LocaleContext';

function About() {
  const { translations } = useContext(LocaleContext);

  return (
    <AboutContainer>
      <Section name="about">
        {translations.about.text}
      </Section>
    </AboutContainer>
  );
}

export default About;

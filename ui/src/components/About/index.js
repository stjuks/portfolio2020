import React from 'react';
import { AboutContainer } from './styles';
import Section from '../Section';

function About() {
  return (
    <AboutContainer>
      <Section name="about">
        <p>
          Hello, I'm Steven Juks, an avid <strong>front-end developer</strong> from Estonia who enjoys taking on new challenges and
          is always looking for ways to improve. I value <strong>critical thinking</strong>,{' '}
          <strong>punctuality</strong> and
          <strong> attention to detail</strong>.
        </p>
        <p>
          I graduated from <strong>Tallinn University of Technology</strong> with a<strong> BSc in informatics</strong>{' '}
          and am now looking to work on interesting projects to develop my skills further. If you have an offer, feel
          free to <strong>get in touch</strong> via the links below.
        </p>
      </Section>
    </AboutContainer>
  );
}

export default About;

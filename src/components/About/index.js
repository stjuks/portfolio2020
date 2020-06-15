import React from 'react';
import { AboutContainer } from './styles';
import TextLink from '../../styles/TextLink';
import EmailForm from '../EmailForm';

function About() {
  return (
    <AboutContainer>
      <div className="content">
        <p>
          Hello, I'm Steven Juks, an avid <strong>front-end developer</strong>{' '}
          who enjoys taking on new challenges and is always looking for ways to
          improve. I value <strong>critical thinking</strong>,{' '}
          <strong>punctuality</strong> and
          <strong> attention to detail</strong>.
        </p>
        <p>
          I graduated from <strong>Tallinn University of Technology</strong>{' '}
          with a<strong> BSc in informatics</strong> and am now looking to work
          on interesting projects. If you have an offer, feel free to{' '}
          <strong>get in touch</strong> via the links below.
        </p>
        <TextLink href="">Check out my resume</TextLink>
        <div className="contact">
          <h3 className="med-title">CONTACT ME</h3>
          <TextLink href="">E-mail</TextLink>
          <TextLink href="">LinkedIn</TextLink>
          <TextLink href="">Instagram</TextLink>
          <TextLink href="">FB Messenger</TextLink>
          <TextLink href="">GitHub</TextLink>
        </div>
        <EmailForm />
      </div>
    </AboutContainer>
  );
}

export default About;

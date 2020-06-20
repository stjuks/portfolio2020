import React from 'react';
import { ContactContainer } from './styles';
import Section from '../Section';
import TextLink from '../../styles/TextLink';
import { links } from '../../util/data';
import { LongArrowRight } from '../icons';
import EmailForm from '../EmailForm';

function Contact() {
  return (
    <ContactContainer>
      <Section className="contact" name="contact">
        <h3 className="med-title">CONTACT ME</h3>
        <TextLink href="mailto:stevenjuks@hotmail.com">E-mail</TextLink>
        <TextLink href={links.linkedin}>LinkedIn</TextLink>
        <TextLink href={links.github}>GitHub</TextLink>
        <TextLink href={links.fbMsg}>FB Messenger</TextLink>
        <TextLink href="" className="resume-link">
          <LongArrowRight />
          Check out my resume
        </TextLink>
      </Section>
      <EmailForm />
    </ContactContainer>
  );
}

export default Contact;

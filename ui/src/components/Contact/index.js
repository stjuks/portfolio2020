import React, { useContext } from 'react';
import { ContactContainer } from './styles';
import Section from '../Section';
import TextLink from '../../styles/TextLink';
import { links } from '../../util/data';
import { LongArrowRight } from '../icons';
import EmailForm from '../EmailForm';
import { LocaleContext } from '../../util/LocaleContext';

function Contact() {
  const { translations } = useContext(LocaleContext);

  return (
    <ContactContainer>
      <Section className="contact-section" name="contact">
        <h3>{translations.contact.title}</h3>
        <TextLink href={`mailto:${links.email}`}>{translations.contact.email}</TextLink>
        <TextLink href={links.linkedin}>LinkedIn</TextLink>
        <TextLink href={links.github}>GitHub</TextLink>
        <TextLink href={links.fbMsg}>FB Messenger</TextLink>
        <TextLink href={links.resume} className="resume-link">
          <LongArrowRight />
          {translations.contact.resume}
        </TextLink>
        <EmailForm />
      </Section>
    </ContactContainer>
  );
}

export default Contact;

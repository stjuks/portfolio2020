import React from 'react';
import { FrameContainer } from './styles';
import { GitHub, LinkedIn, Mail, File } from '../icons';
import { scrollIntoView } from '../../util';
import { links } from '../../util/data';
import { ViewContext } from '../../util/ViewContext';
import locales from '../../locale';
import { LocaleContext } from '../../util/LocaleContext';

const ContactIcon = ({ icon, href, label }) => (
  <a href={href} className="contact-link" target="_blank" tabIndex={1} name="label" rel="noreferrer">
    <span className="icon-container" data-label={label}>
      {icon}
    </span>
  </a>
);

function Frame() {
  const { activeView } = React.useContext(ViewContext);
  const { locale, setLocale, translations } = React.useContext(LocaleContext);

  const handleLinkClick = (e) => {
    e.preventDefault();
    scrollIntoView(e.target.getAttribute('href'));
  };

  const icons = [
    {
      icon: <File />,
      href: links.resume,
      label: translations.contactFrame.resumeLabel
    },
    { icon: <GitHub />, href: links.github, label: 'GitHub' },
    { icon: <LinkedIn />, href: links.linkedin, label: 'LinkedIn' },
    { icon: <Mail />, href: `mailto:${links.email}`, label: 'Email' }
  ];

  return (
    <FrameContainer>
      <div className="navbar">
        <a
          href="#landing"
          className="logo"
          onClick={handleLinkClick}
          name="landing"
        >
          SJ<span>.</span>
        </a>
        <div className="links">
          <a
            href="#projects"
            data-active={activeView === 'projects'}
            className="link"
            onClick={handleLinkClick}
            name="projects"
          >
            {translations.navbar.work}
          </a>
          <a
            href="#contact"
            data-active={activeView === 'contact'}
            className="link"
            onClick={handleLinkClick}
            name="contact"
          >
            {translations.navbar.contact}
          </a>
        </div>
      </div>
      <div className="contact-links">
        {icons.map((item) => (
          <ContactIcon key={item.href} {...item} />
        ))}
      </div>
      {Object.keys(locales)
        .filter((l) => l !== locale)
        .map((l) => (
          <button
            key={l}
            className="language-btn"
            onClick={() => setLocale(l)}
            aria-label="select language"
          >
            {l}
          </button>
        ))}
    </FrameContainer>
  );
}

export default Frame;

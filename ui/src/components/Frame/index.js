import React from 'react';
import { FrameContainer } from './styles';
import { GitHub, LinkedIn, Mail, File } from '../icons';
import { scrollIntoView } from '../../util';
import { links } from '../../util/data';
import ViewContext from '../../util/ViewContext';

const ContactIcon = ({ icon, href, label }) => (
  <a href={href} className="contact-link" target="_blank" tabIndex={1}>
    <span className="icon-container" data-label={label}>
      {icon}
    </span>
  </a>
);

const icons = [
  { icon: <File />, href: links.resume, label: 'Resume' },
  { icon: <GitHub />, href: links.github, label: 'GitHub' },
  { icon: <LinkedIn />, href: links.linkedin, label: 'LinkedIn' },
  { icon: <Mail />, href: `mailto:${links.email}`, label: 'Email' }
];

function Frame() {
  const { activeView } = React.useContext(ViewContext);

  const handleLinkClick = (e) => {
    e.preventDefault();
    scrollIntoView(e.target.getAttribute('href'));
  };

  return (
    <FrameContainer>
      <div className="navbar">
        <a href="#landing" className="logo" onClick={handleLinkClick}>
          SJ<span>.</span>
        </a>
        <div className="links">
          <a href="#projects" data-active={activeView === 'projects'} className="link" onClick={handleLinkClick}>
            Work
          </a>
          <a href="#contact" data-active={activeView === 'contact'} className="link" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
      <div className="contact-links">
        {icons.map((item) => (
          <ContactIcon key={item.href} {...item} />
        ))}
      </div>
    </FrameContainer>
  );
}

export default Frame;

import React from 'react';
import { FrameContainer } from './styles';
import { GitHub, LinkedIn, Mail, Instagram } from '../icons';
import { scrollIntoView } from '../../util';
import { links } from '../../util/data';

const ContactIcon = ({ icon, href }) => (
  <a href={href} className="icon-container">
    {icon}
  </a>
);

const icons = [
  { icon: <GitHub />, href: links.github },
  { icon: <LinkedIn />, href: links.linkedin },
  { icon: <Mail />, href: `mailto:${links.email}` }
];

function Frame() {
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
          <a href="#projects" className="link" onClick={handleLinkClick}>
            Work
          </a>
          <a href="#contact" className="link" onClick={handleLinkClick}>
            Contact
          </a>
          <button className="link">Resume</button>
        </div>
      </div>
      <div className="contact-links">
        {icons.map((item) => (
          <ContactIcon {...item} />
        ))}
      </div>
    </FrameContainer>
  );
}

export default Frame;

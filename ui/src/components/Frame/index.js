import React from 'react';
import { FrameContainer } from './styles';
import { GitHub, LinkedIn, Mail, Instagram } from '../icons';
import { scrollIntoView } from '../../util';
import { links } from '../../util/data';
import ViewContext from '../../util/ViewContext';

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
          <a href={links.resume} target="_blank" className="link resume-link">
            Resume
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

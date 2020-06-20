import React from 'react';
import { FrameContainer } from './styles';
import { GitHub, LinkedIn, Mail, Instagram } from '../icons';
import { scrollIntoView } from '../../util';

const ContactIcon = ({ icon }) => (
  <a href="" className="icon-container">
    {icon}
  </a>
);

const icons = [<GitHub />, <LinkedIn />, <Mail />, <Instagram />];

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
        {icons.map((icon) => (
          <ContactIcon icon={icon} />
        ))}
      </div>
    </FrameContainer>
  );
}

export default Frame;

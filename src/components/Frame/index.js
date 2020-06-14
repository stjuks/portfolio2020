import React from 'react';
import { FrameContainer } from './styles';
import { GitHub, LinkedIn, Mail, Instagram } from '../icons';

const ContactIcon = ({ icon }) => (
  <a href="" className="icon-container">
    {icon}
  </a>
);

const icons = [<GitHub />, <LinkedIn />, <Mail />, <Instagram />];

function Frame() {
  return (
    <FrameContainer>
      <div className="navbar">
        <a href="" className="logo">
          SJ<span>.</span>
        </a>
        <div className="links">
          <a href="" className="link">
            Work
          </a>
          <a href="" className="link">
            About
          </a>
          <a href="" className="link">
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

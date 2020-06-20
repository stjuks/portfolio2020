import React from 'react';
import { FooterContainer } from './styles';

function Footer() {
  return (
    <FooterContainer as="footer">
      <small>
        <div style={{ marginRight: '0.25rem' }}>Copyright &copy; Steven Juks {new Date().getFullYear()}.</div>
        <div>All Rights Reserved.</div>
      </small>
    </FooterContainer>
  );
}

export default Footer;

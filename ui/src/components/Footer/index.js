import React, { useContext } from 'react';
import { FooterContainer } from './styles';
import { LocaleContext } from '../../util/LocaleContext';

function Footer() {
  const { translations } = useContext(LocaleContext);

  return (
    <FooterContainer as="footer">
      <small>
        <div style={{ marginRight: '0.25rem' }}>&copy; Steven Juks {new Date().getFullYear()}.</div>
        <div>{translations.copyright}</div>
      </small>
    </FooterContainer>
  );
}

export default Footer;

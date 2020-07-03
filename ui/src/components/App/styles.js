import { createGlobalStyle } from 'styled-components';

import gtSuperRegular from '../../assets/fonts/GT-Super-Text-Regular.woff2';
import gtSuperMediumItalic from '../../assets/fonts/GT-Super-Display-Medium-Italic.woff2';
import theme from '../../styles/theme';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
    font-display: swap;
  }

  @font-face {
    font-family: 'GT Super';
    src: url(${gtSuperRegular});
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'GT Super';
    src: url(${gtSuperMediumItalic});
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  html {
    background: ${theme.colors.black};
  }

  body,
  html {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.sansSerif}, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }
  
  *:focus {
    outline: none;
  }
  
  h3 {
    font-size: 1.25rem;
  }
`;

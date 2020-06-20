import { createGlobalStyle } from 'styled-components';

import interBlack from '../../assets/fonts/Inter-Black.woff2';
import interBold from '../../assets/fonts/Inter-Bold.woff2';
import interMedium from '../../assets/fonts/Inter-Medium.woff2';
import interRegular from '../../assets/fonts/Inter-Regular.woff2';

import gtSuperRegular from '../../assets/fonts/GT-Super-Text-Regular.woff2';
import gtSuperMediumItalic from '../../assets/fonts/GT-Super-Display-Medium-Italic.woff2';
import theme from '../../styles/theme';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${interBlack});
    font-weight: 800;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${interBold});
    font-weight: 700;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${interMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${interRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: 'GT Super';
    src: url(${gtSuperRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: 'GT Super';
    src: url(${gtSuperMediumItalic});
    font-weight: 500;
    font-style: italic;
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

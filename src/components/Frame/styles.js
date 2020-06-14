import styled from 'styled-components';
import theme from '../../styles/theme';
import media from '../../styles/media';

export const FrameContainer = styled.div`
  position: fixed;
  left: 1.5rem;
  top: 1.5rem;
  bottom: 1.5rem;
  right: 1.5rem;
  pointer-events: none;
  z-index: 9999;

  .logo,
  .links,
  .contact-links {
    pointer-events: auto;
  }

  .navbar {
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.serif};
  }

  .logo {
    font-size: 1.5rem;

    span {
      color: ${theme.colors.orange};
    }
  }

  .links {
    margin-left: auto;

    .link:not(:first-child) {
      margin-left: 1rem;
    }

    .link:not(:last-child) {
      margin-right: 1rem;
    }

    button {
      color: ${theme.colors.orange};
    }
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    color: ${theme.colors.orange};
    position: absolute;
    bottom: 0;

    ${media.s`
      display: none;
    `}

    .icon-container {
      transition: all 0.2s;
      outline: none;

      :hover,
      :focus {
        color: ${theme.colors.white};
      }
      :not(:last-child) {
        margin-bottom: 2.5rem;
      }
    }
  }
`;

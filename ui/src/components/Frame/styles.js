import styled from 'styled-components';
import theme from '../../styles/theme';
import media from '../../styles/media';
import mixins from '../../styles/mixins';

export const FrameContainer = styled.div`
  ${mixins.engulfFixed}

  pointer-events: none;
  z-index: 9999;

  .logo,
  .links,
  .contact-links {
    pointer-events: auto;
  }

  .navbar {
    padding: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background: linear-gradient(to bottom, ${theme.colors.black.opacity(0.5)}, transparent);
    color: ${theme.colors.white};
    font-family: ${theme.fonts.serif};

    ${media.s`
      padding: 1rem;
    `}
  }

  .logo {
    font-size: 1.5rem;

    span {
      color: ${theme.colors.orange};
    }
  }

  .links {
    margin-left: auto;
    display: flex;

    .link {
      position: relative;
      color: ${theme.colors.white};
      transition: all 0.5s;

      :before {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        height: 2px;
        width: 100%;
        transform-origin: left;
        transform: scaleX(0);
        transition: all 0.3s;
      }

      :focus,
      :hover {
        :before {
          transform: scaleX(1);
          background: ${theme.colors.white};
        }
      }
    }

    .link[data-active='true'] {
      :before {
        transform: scaleX(1);
        background: ${theme.colors.orange};
      }
    }

    .link:not(:first-child) {
      margin-left: 1rem;
    }

    .link:not(:last-child) {
      margin-right: 1rem;
    }

    .resume-link {
      color: ${theme.colors.orange};
    }
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    color: ${theme.colors.orange};
    position: absolute;
    bottom: 0;
    margin: 1.5rem;

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

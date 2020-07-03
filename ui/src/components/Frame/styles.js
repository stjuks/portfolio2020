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
  .contact-links,
  .language-btn {
    pointer-events: auto;
  }

  .navbar,
  .language-btn {
    padding: 1.5rem;

    ${media.s`
      padding: 1rem;
    `}
  }

  .navbar {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background: linear-gradient(to bottom, ${theme.colors.black.opacity(0.5)}, transparent);
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
    display: flex;
    align-items: center;

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

      :hover,
      :focus {
        :before {
          transform: scaleX(1);
          background: ${theme.colors.white};
        }
      }
    }

    .link[data-active='true'] {
      color: ${theme.colors.white};

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

    ${media.s`
      display: none;
    `}

    .contact-link {
      padding: 2rem;
      position: relative;

      :hover,
      :focus {
        .icon-container {
          transform: translate(calc(-100% - 2rem), -50%);

          :after {
            opacity: 1;
            color: ${theme.colors.white};
            pointer-events: auto;
          }
        }
      }

      .icon-container {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        transition: all 0.2s;

        ${mixins.flexCenter}

        :after {
          content: attr(data-label);
          transition: all 0.2s;
          opacity: 0;
          font-size: 0.75rem;
          pointer-events: none;
          position: absolute;
          left: 2.5rem;
        }
      }
    }
  }

  .language-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    font-family: ${theme.fonts.sansSerif};
    font-weight: 500;
    text-transform: uppercase;
    color: ${theme.colors.orange};
  }
`;

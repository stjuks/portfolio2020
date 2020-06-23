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
        top: 50%;
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
      padding: 1.5rem;
      position: relative;
      margin-bottom: 0.5rem;

      :hover,
      :focus {
        .icon-container {
          transform: translate(calc(-100% - 1.5rem), -50%);
          
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
        transition: all .2s;

        ${mixins.flexCenter}

        :after {
          content: attr(data-label);
          transition: all .2s;
          opacity: 0;
          font-size: 0.75rem;
          pointer-events: none;
          position: absolute;
          left: 2rem;
        }
      }
    }

    /* .contact-link {
      transition: all 0.2s;
      outline: none;
      position: relative;

      :hover,
      :focus {
        color: ${theme.colors.white};

        .icon-container {
          transform: translateX(-2rem);
          
          svg {
            opacity: 0;
          }

          :before {
            opacity: 1;
            pointer-events: auto;
          }
        }
      }

      :not(:last-child) {
        margin-bottom: 2.5rem;
      }

      .icon-container {
        transition: all .2s;

        :before {
          position: absolute;
          left: 2rem;
          transform: translateY(-50%);
          top: 45%;
          pointer-events: none;
          opacity: 0;
          content: attr(data-label);
          transition: all .2s;
          font-family: ${theme.fonts.sansSerif};
          font-weight: 500;
          font-size: 0.75rem;
        }
      }
    } */
  }
`;

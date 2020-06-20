import styled from 'styled-components';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';
import Section from '../Section';

export const LandingContainer = styled(Section)`
  ${mixins.flexCenter}

  color: white;
  height: 100vh;

  .title-container {
    color: ${theme.colors.white.opacity(0.8)};
    text-align: right;
    line-height: 0.8em;
    font-weight: 800;
    font-family: ${theme.fonts.sansSerif};
    font-size: 20vw;

    ${media.m`
      margin-top: -7rem;
      text-align: center;
    `}

    .bottom-line {
      font-size: 0.95em;
      position: relative;
      display: inline-block;
      color: ${theme.colors.black};
      -webkit-text-stroke: 1px ${theme.colors.white};

      .point {
        -webkit-text-stroke: 0;
        color: ${theme.colors.white.opacity(0.8)};
      }

      :before {
        content: 'FRONT-END DEVELOPER';
        width: 10em;
        line-height: 1.25em;
        position: absolute;
        font-size: 0.12em;
        left: -8.25em;
        top: 1em;
        font-style: italic;
        font-weight: 500;
        -webkit-text-stroke: 0;

        color: ${theme.colors.orange};
        font-family: ${theme.fonts.serif};

        ${media.m`
          transform: translateX(-50%);
          left: 50%;
          top: calc(100% + 5vh);
          font-size: 1.5rem;
        `}
      }
    }
  }

  .next-page-btn {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;

    height: 2rem;
    width: 2rem;
    border: 1px solid ${theme.colors.orange};
    border-radius: 50%;

    svg {
      width: 10px;
      transform: translateX(-50%);
      bottom: 35%;
      left: 50%;
      pointer-events: none;
      color: ${theme.colors.white};
      position: absolute;
      transition: bottom 0.2s;
    }

    :hover,
    :focus {
      svg {
        bottom: -100%;
        transition: bottom 0.2s 0.1s;
      }

      :after {
        opacity: 0;
        transition: opacity 0.2s;
      }
    }

    :after {
      content: 'Work';
      color: ${theme.colors.white.opacity(0.8)};
      font-family: ${theme.fonts.serif};
      font-size: 0.875rem;
      position: absolute;
      transition: opacity 0.2s 0.1s;
      top: calc(100% + 0.5rem);
      transform: translateX(-50%);
      left: 50%;
    }
  }
`;

import styled, { css } from 'styled-components';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

export const ProjectsContainer = styled.div`
  ${mixins.flexCenter}

  .projects__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10vw;
    padding: 10rem 10vw;
    width: 100%;
    height: 100%;
    max-width: 60rem;

    ${media.l`
      grid-gap: 5vw;
      padding: 10rem 4rem;
    `}

    ${media.m`
      grid-template-columns: 1fr;
    `}

    ${media.s`
      padding: 10rem 1rem;
    `}
  }
`;

export const ProjectItemContainer = styled.div`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.sansSerif};

  :nth-child(even) {
    margin-top: 5vw;
  }

  ${media.m`
    margin-top: 5rem !important;
  `}

  .preview-image__wrapper {
    position: relative;
    padding-top: 158%;

    .preview-image__container {
      ${mixins.engulf}

      .preview-image {
        width: 100%;
        height: 100%;
      }
    }

    .hover-overlay {
      ${mixins.engulf}
      z-index: 0;
      background: ${theme.colors.black.opacity(0.9)};
    }

    .project-details {
      ${mixins.engulf}

      padding: 1rem;
      transition: all 0.2s;
      background: linear-gradient(
        160deg,
        ${theme.colors.black.opacity(0.95)} 10%,
        ${theme.colors.black.opacity(0.8)} 20%,
        transparent 50%
      );
      box-sizing: border-box;

      background-size: 100% 200%;
      background-position-y: 100%;
      font-family: ${theme.fonts.sansSerif};

      .text-link {
        margin-bottom: 0.25rem;
      }

      .row {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
      }

      .duration {
        text-transform: uppercase;
        font-weight: 500;
        color: ${theme.colors.white.opacity(0.5)};
      }

      .description {
        line-height: 1.75rem;
        font-weight: 400;
        padding-right: 1rem;
        margin-bottom: 1rem;
      }

      .actions {
        margin-left: auto;
        display: flex;

        a {
          ${mixins.flexCenter}
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          color: ${theme.colors.orange};
          border: 1px solid ${theme.colors.white.opacity(0.1)};
          transition: all 0.2s;

          :hover,
          :focus {
            border-color: ${theme.colors.orange};
          }

          :not(:last-child) {
            margin-right: 0.5rem;
          }
        }
      }

      .name {
        font-weight: 700;
        margin-bottom: 0.25rem;
        text-transform: uppercase;
        pointer-events: none;
        font-size: 1.25rem;
        transform-origin: left;
      }
    }
  }
`;

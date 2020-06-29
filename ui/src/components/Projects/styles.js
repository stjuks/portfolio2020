import styled from 'styled-components';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

export const ProjectsContainer = styled.div`
  ${mixins.flexCenter}

  .projects__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10vw;
    margin: 2.5rem 0;
    padding: 7.5rem 10vw;
    width: 100%;
    height: 100%;
    max-width: 60rem;

    ${media.l`
      grid-gap: 5vw;
      padding: 7.5rem 4rem;
    `}

    ${media.m`
      grid-template-columns: 1fr;
    `}

    ${media.s`
      margin: 0;
      padding: 0rem 1rem 5rem 1rem;
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
      overflow: hidden;

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
        color: ${theme.colors.orange};
      }

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        font-size: 0.875rem;
        margin: 0.5rem -0.625rem;

        .tech-item {
          color: ${theme.colors.white.opacity(0.5)};
          position: relative;
          z-index: 1;
          margin: 0.25rem 0.625rem;

          :before {
            ${mixins.engulf}
            content: '';
            background: ${theme.colors.white.opacity(0.025)};
            z-index: -1;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            border-radius: 5rem;
            padding: 0.125rem 0.5rem;
          }
        }
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
          border: 1px solid ${theme.colors.white.opacity(0.05)};
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
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        pointer-events: none;
        font-size: 1.25rem;
        transform-origin: left;
      }

      .view-btn {
        position: absolute;
        left: -2.5rem;
        top: 1rem;
        padding: 0.5rem;
        font-size: 0.875rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        visibility: hidden;

        .text {
          font-family: ${theme.fonts.serif};
          color: ${theme.colors.white.opacity(0.25)};
          margin-left: 0.5rem;
        }

        svg {
          margin-left: 0.5rem;
          color: ${theme.colors.orange};
          z-index: 0;
        }

        ${media.s`
          visibility: visible;
        `}
      }
    }
  }
`;

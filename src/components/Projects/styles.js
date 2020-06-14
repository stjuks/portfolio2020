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
    padding: 10rem 10vw;
    width: 100%;
    height: 100%;
    max-width: 60rem;

    ${media.l`
      grid-gap: 5vw;
      padding: 10rem 3rem;
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

      .row {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
      }

      .text-link {
        font-family: ${theme.fonts.serif};
        font-style: italic;
        position: relative;
        color: ${theme.colors.orange};

        :after,
        :before {
          content: '';
          position: absolute;
          width: 100%;
          left: 0;
          right: 0;
          height: 1px;
          transition: all 0.5s cubic-bezier(1, 0, 0, 1);
        }

        :after {
          transform: scaleX(1);
          transform-origin: right;
          bottom: -0.125rem;
          background: ${theme.colors.white.opacity(0.75)};
        }

        :before {
          transform: scaleX(0);
          transform-origin: left;
          background: ${theme.colors.orange};
          top: 50%;
        }

        :hover,
        :focus {
          :after {
            transform: scaleX(0);
          }

          :before {
            transform: scaleX(1);
          }
        }
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

          :hover {
            border-color: ${theme.colors.orange};
          }

          :not(:last-child) {
            margin-right: 0.5rem;
          }
        }
      }

      .hover-details {
        opacity: 0;
        transition: opacity 0.2s;
      }

      .name {
        font-weight: 700;
        margin-bottom: 0.25rem;
        text-transform: uppercase;
        pointer-events: none;
        font-size: 1.25rem;
        transition: all 0.2s;
        transform-origin: left;
        transform: translate(-1rem, -2.5rem) scale(0.75);
      }

      :hover {
        background-position-y: 0;

        .name {
          transform: translate(0, 0);
        }

        .hover-details {
          opacity: 1;
        }
      }
    }
  }
`;

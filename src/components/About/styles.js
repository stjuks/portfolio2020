import styled from 'styled-components';
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';
import media from '../../styles/media';

export const AboutContainer = styled.div`
  ${mixins.flexCenter}

  .content {
    max-width: 35rem;
    color: ${theme.colors.white};
    font-weight: 500;
    line-height: 2rem;
    padding: 0 4rem;

    ${media.s`
      padding: 0 1rem;
    `}

    p {
      margin: 2rem 0;
    }
  }

  strong {
    font-weight: 700;
    color: ${theme.colors.orange};
  }

  .contact {
    margin-top: 5rem;
    display: block;

    .text-link {
      margin: 1rem 0;

      svg {
        position: absolute;
        left: -4rem;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.2s;
        opacity: 0.5;
      }

      :hover svg {
        transform: translate(20%, -50%);
        opacity: 1;
      }

      ${media.m`
        svg {
          display: none;
        }
      `}
    }

    .resume-link {
      margin-top: 4rem;
    }
  }
`;

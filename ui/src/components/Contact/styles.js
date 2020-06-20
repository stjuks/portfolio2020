import styled from 'styled-components';
import media from '../../styles/media';
import ContentContainer from '../../styles/ContentContainer';

export const ContactContainer = styled(ContentContainer)`
  margin-top: 2rem;
  display: block;

  .contact-section {
    padding-top: 3rem;
  }

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

    :hover,
    :focus {
      svg {
        transform: translate(20%, -50%);
        opacity: 1;
      }
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
`;

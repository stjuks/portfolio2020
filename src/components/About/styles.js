import styled from 'styled-components';
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';

export const AboutContainer = styled.div`
  ${mixins.flexCenter}

  .content {
    max-width: 35rem;
    color: ${theme.colors.white};
    font-weight: 500;
    line-height: 2rem;
    padding: 1rem;

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
    }
  }
`;

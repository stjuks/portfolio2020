import styled from 'styled-components';
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';

export const AboutContainer = styled.div`
  ${mixins.flexCenter}

  margin: 10rem 0;

  .content {
    max-width: 35rem;
    color: ${theme.colors.white};
    font-weight: 500;
    line-height: 2rem;
  }

  strong {
    font-weight: 700;
    color: ${theme.colors.orange};
  }
`;

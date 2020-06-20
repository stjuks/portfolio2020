import styled from 'styled-components';

import media from './media';
import theme from './theme';

export default styled.div`
  max-width: 35rem;
  color: ${theme.colors.white};
  font-weight: 500;
  line-height: 2rem;
  padding: 0 4rem;
  margin: 0 auto;

  ${media.s`
    padding: 0 1rem;
  `}

  p {
    margin: 2rem 0;
  }
`;

import styled from 'styled-components';
import theme from '../../styles/theme';
import ContentContainer from '../../styles/ContentContainer';

export const AboutContainer = styled(ContentContainer)`
  p {
    margin: 2rem 0;
  }

  strong {
    font-weight: 700;
    color: ${theme.colors.orange};
  }
`;

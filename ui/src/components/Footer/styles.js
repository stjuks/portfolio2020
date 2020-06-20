import styled from 'styled-components';
import theme from '../../styles/theme';
import ContentContainer from '../../styles/ContentContainer';

export const FooterContainer = styled(ContentContainer)`
  color: ${theme.colors.white.opacity(0.25)};
  margin-top: 5rem;
  margin-bottom: 1rem;

  small {
    display: flex;
    flex-wrap: wrap;
  }
`;

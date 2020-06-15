import styled from 'styled-components';
import theme from './theme';

export default styled.a.attrs({ className: 'text-link' })`
  font-family: ${theme.fonts.serif};
  font-style: italic;
  position: relative;
  color: ${theme.colors.orange};
  display: table;
  line-height: 1em;
  white-space: nowrap;

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
`;

import { motion } from 'framer-motion';
import styled from 'styled-components';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

export const FixedBackgroundContainer = styled(motion.div)`
  ${mixins.engulfFixed}

  background: ${theme.colors.black};
  z-index: -1;
  height: 100vh;

  .lines-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .bg-line {
      height: 1px;
      width: 100%;
      background: ${theme.colors.white.opacity(0.025)};
      
      :first-child,
      :last-child {
        visibility: hidden;
      }
    }
  }
`;

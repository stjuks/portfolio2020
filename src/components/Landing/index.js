import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { LandingContainer } from './styles';
import { LongArrowDown } from '../icons';
import { useScroll } from '../../util/hooks';

function Landing() {
  const scrollPos = useScroll();
  const [ref, inView] = useInView();

  return (
    <LandingContainer ref={ref}>
      {inView && (
        <>
          <motion.div
            className="title-container"
            animate={{ rotate: scrollPos / 50, skew: scrollPos / 20 }}
          >
            <motion.div className="top-line" animate={{ x: scrollPos }}>
              STEVEN
            </motion.div>
            <motion.div className="bottom-line" animate={{ x: -scrollPos }}>
              JUKS<span className="point">.</span>
            </motion.div>
          </motion.div>
          <motion.button
            className="next-page-btn"
            initial={{ opacity: 0, x: '-50%' }}
            animate={{
              y: -scrollPos / 5,
              opacity: scrollPos > 100 ? 0 : 1,
              pointerEvents: scrollPos > 100 ? 'none' : 'auto'
            }}
          >
            <LongArrowDown />
          </motion.button>
        </>
      )}
    </LandingContainer>
  );
}

export default Landing;

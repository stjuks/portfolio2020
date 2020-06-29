import React, { useState, useRef, useContext } from 'react';
import { ProjectItemContainer } from './styles';
import TextLink from '../../styles/TextLink';
import { FocusWithin } from 'react-focus-within';

import { motion, AnimatePresence } from 'framer-motion';
import { Code, Play, LongArrowRight } from '../icons';
import { useInView } from 'react-intersection-observer';
import { LocaleContext } from '../../util/LocaleContext';

function DetailRow({ children, index }) {
  return (
    <motion.div>
      <motion.div
        initial={{ x: '-50%', opacity: 0, skew: 45 }}
        animate={{ x: 0, opacity: 1, skew: 0 }}
        transition={{ delay: index * 0.1, duration: 0.2 }}
        exit={{ x: '-50%', skew: -45, opacity: 0, delay: index * 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function DetailRows({ project }) {
  const { getLocaleValue, translations } = useContext(LocaleContext);

  const rows = [
    <div className="duration">{getLocaleValue(project.duration)}</div>,
    <div className="tech-list">
      {project.tech.map((tech) => (
        <div key={tech} className="tech-item">
          {tech}
        </div>
      ))}
    </div>,
    <div className="description">{getLocaleValue(project.description)}</div>,
    <div style={{ display: 'flex' }}>
      <TextLink href={project.github}>{translations.projects.viewCode}</TextLink>
      {project.live && (
        <TextLink href={project.live} style={{ marginLeft: '0.75rem' }}>
          {translations.projects.viewDemo}
        </TextLink>
      )}
    </div>
  ];

  return rows.map((row, i) => (
    <DetailRow key={i} index={i}>
      {row}
    </DetailRow>
  ));
}

function ProjectItem({ project }) {
  const [isHovering, setHovering] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-15% 0px' });

  const { getLocaleValue } = useContext(LocaleContext);

  return (
    <ProjectItemContainer ref={ref}>
      <FocusWithin>
        {({ focusProps, isFocused }) => {
          const isOpened = isFocused || isHovering;

          const handleClick = (e) => {
            if (isOpened) {
              focusProps.onBlur(e);
              setHovering(false);
              setTouched(false);
            } else {
              focusProps.onFocus(e);
              setHovering(true);
            }
          };

          const handleHoverStart = () => {
            if (!isTouched) setHovering(true);
          };

          const handleHoverEnd = () => {
            setHovering(false);
          };

          const handleTouchStart = () => {
            setTouched(true);
          };

          return (
            <motion.div
              className="preview-image__wrapper"
              animate={{
                y: inView ? 0 : '20%',
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.9
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              tabIndex={0}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              onTouchStart={handleTouchStart}
              onClick={handleClick}
              {...focusProps}
            >
              <div className="preview-image__container">
                <motion.img
                  src={inView ? project.previewImage : null}
                  alt={getLocaleValue(project.name)}
                  className="preview-image"
                  animate={{
                    scale: isOpened ? 1.05 : 1,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
              <motion.div className="hover-overlay" animate={{ opacity: isOpened ? 1 : 0 }} />
              <div
                className="project-details"
                style={{
                  pointerEvents: isOpened ? 'auto' : 'none'
                }}
              >
                <motion.div
                  className="name"
                  initial={{ x: '-1rem', y: '-2.5rem', scale: 0.75 }}
                  animate={{
                    scale: isOpened ? 1 : 0.75,
                    x: isOpened ? 0 : '-1rem',
                    y: isOpened ? 0 : '-2.5rem'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {getLocaleValue(project.name)}
                </motion.div>
                <motion.button
                  className="view-btn"
                  animate={{ x: isOpened ? '-1.25rem' : 0, opacity: isOpened ? 1 : 0.75 }}
                >
                  <LongArrowRight />
                </motion.button>
                <AnimatePresence>{isOpened && <DetailRows project={project} />}</AnimatePresence>
              </div>
            </motion.div>
          );
        }}
      </FocusWithin>
    </ProjectItemContainer>
  );
}

export default ProjectItem;

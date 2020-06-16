import React, { useState } from 'react';
import { ProjectItemContainer } from './styles';
import TextLink from '../../styles/TextLink';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Code, Play } from '../icons';

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
  const rows = [
    <div className="row">
      <div className="duration">{project.duration}</div>
      <div className="actions">
        <a href="">
          <Code />
        </a>
        <a href="">
          <Play />
        </a>
      </div>
    </div>,
    <div className="description">{project.description}</div>,
    <TextLink href="">Read more</TextLink>
  ];

  return rows.map((row, i) => <DetailRow index={i}>{row}</DetailRow>);
}

function ProjectItem({ project }) {
  const [isHovering, setHovering] = useState(false);

  return (
    <AnimateSharedLayout>
      <ProjectItemContainer>
        <motion.div
          className="preview-image__wrapper"
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
          tabIndex={0}
        >
          <div className="preview-image__container">
            <img
              src={project.previewImage}
              alt={project.name}
              className="preview-image"
            />
          </div>
          <motion.div
            className="hover-overlay"
            animate={{ opacity: isHovering ? 1 : 0 }}
          />
          <div
            className="project-details"
            style={{ pointerEvents: isHovering ? 'auto' : 'none' }}
          >
            <motion.div
              className="name"
              initial={{ x: '-1rem', y: '-2.5rem', scale: 0.75 }}
              animate={{
                scale: isHovering ? 1 : 0.75,
                x: isHovering ? 0 : '-1rem',
                y: isHovering ? 0 : '-2.5rem'
              }}
              transition={{ duration: 0.2 }}
            >
              {project.name}
            </motion.div>
            <AnimatePresence>
              {isHovering && <DetailRows project={project} />}
            </AnimatePresence>
          </div>
        </motion.div>
      </ProjectItemContainer>
    </AnimateSharedLayout>
  );
}

export default ProjectItem;

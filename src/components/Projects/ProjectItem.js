import React, { useState } from 'react';
import { ProjectItemContainer } from './styles';

import { motion, AnimateSharedLayout } from 'framer-motion';
import { Code, Play } from '../icons';

function ProjectItem({ project }) {
  return (
    <AnimateSharedLayout>
      <ProjectItemContainer>
        <div className="preview-image__wrapper">
          <div className="preview-image__container">
            <img src={project.previewImage} alt={project.name} className="preview-image" />
          </div>
          <div className="project-details">
            <div className="name">{project.name}</div>
            <div className="hover-details">
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
              </div>
              <div className="description">{project.description}</div>
              <a href="" className="text-link">
                Read more
              </a>
            </div>
          </div>
        </div>
      </ProjectItemContainer>
    </AnimateSharedLayout>
  );
}

export default ProjectItem;

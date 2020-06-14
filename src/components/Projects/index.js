import React from 'react';
import { ProjectsContainer } from './styles';
import { projects } from '../../util/data';

import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <ProjectsContainer>
      <div className="projects__wrapper">
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </ProjectsContainer>
  );
}

export default Projects;

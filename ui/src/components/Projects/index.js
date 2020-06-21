import React from 'react';
import { ProjectsContainer } from './styles';
import { projects } from '../../util/data';

import ProjectItem from './ProjectItem';
import Section from '../Section';

function Projects() {
  return (
    <ProjectsContainer>
      <Section className="projects__wrapper" name="projects">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </Section>
    </ProjectsContainer>
  );
}

export default Projects;

import * as React from 'react';
import { Link, RouteComponentProps, useLocation } from '@reach/router';
import styled from 'styled-components';

import { ProjectCard } from '../components';
import { ProjectDescription } from '../containers';
import { projectData, Section } from '../utils';

// map data for projects in array of objects

interface IProjectProps extends RouteComponentProps {
  children: JSX.Element[];
}

const ProjectDescriptionSection = styled(Section)`
  @media (min-width: 768px) {
    min-height: 65vh;
  }
`;

const ProjectListsSection = styled(Section)`
  display: none;

  @media (min-width: 768px) {
    display: block;
    min-height: 0;
    height: auto;
    ul {
      display: flex;
      gap: 1em;
    }
  }
`;
const Projects = (props: IProjectProps) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return (
    <React.Fragment>
      <ProjectDescriptionSection>{props.children}</ProjectDescriptionSection>
      <ProjectListsSection>
        <ul className='projects'>
          {projectData.map((c) => (
            <li key={c.title}>
              <Link to={`/projects/${c.path}`}>
                <ProjectCard title={c.title} subtitle={c.subtitle}>
                  <img src={c.thumbnailImage} alt='Stock Management App' />
                </ProjectCard>
              </Link>
            </li>
          ))}
        </ul>
      </ProjectListsSection>
    </React.Fragment>
  );
};

export default Projects;

import * as React from 'react';
import { Link, RouteComponentProps, useLocation } from '@reach/router';
import styled from 'styled-components';

import { ProjectCard } from '../components';
import { projectData, Section } from '../utils';

interface IProjectProps extends RouteComponentProps {
  children: JSX.Element[];
}

const ProjectDescriptionSection = styled(Section)`
  @media (min-width: 768px) {
    min-height: 65vh;
  }
`;

const ProjectListsSection = styled(Section)`
  min-height: auto;
  height: auto;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  @media (min-width: 768px) {
    ul {
      flex-direction: row;
      min-height: 0;
      height: auto;
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
        <ul>
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

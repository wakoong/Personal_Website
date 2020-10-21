import * as React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import { Button, ProjectCard } from '../components';
import { projectData, Section } from '../utils';

const ProjectSection = styled(Section)`
  position: relative;

  button {
    position: absolute;
    bottom: 2em;
    right: 2em;

    @media (min-width: 768px) {
      bottom: 3em;
      right: 6em;
    }
  }

  .projects {
    position: relative;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5em;
    padding: 5em 0;
    list-style: none;

    @media (min-width: 768px) {
      grid-template-rows: auto;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2em;
    }
  }

  h1 {
    color: ${(props) =>
      props.theme.primaryColor === '#FEFEFE'
        ? '#454545'
        : props.theme.primaryColor};
  }
`;

export default () => {
  return (
    <ProjectSection>
      <header>
        <h1>Projects</h1>
      </header>
      <ol className='projects'>
        {projectData.map((c) => (
          <li key={c.title}>
            <Link to={`/projects/${c.path}`}>
              <ProjectCard title={c.title} subtitle={c.subtitle}>
                <img src={c.thumbnailImage} alt={c.title} />
              </ProjectCard>
          </Link>
            </li>
        ))}
      </ol>
      <Link to='/projects/rh'>
        <Button text="More Projects . . ." />
      </Link>
    </ProjectSection>
  );
};

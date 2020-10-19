import * as React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { ProjectDescription } from '../containers';
import { ProjectCard } from '../components';
import { Section } from '../utils';
import robinhood from '../assets/images/rh-gorilla.png';
import CP from '../assets/images/CoachPlayer.png';
import bmotivate from '../assets/images/nba-gorilla.png';

// map data for projects in array of objects

interface ProjectProps extends RouteComponentProps {
  children: JSX.Element[];
}

const cards = [
  {
    image: robinhood,
    title: 'RH Gains',
    subtitle:
      'How to get values from mouse movement and plug them into an animation.',
    path: 'rh',
  },
  {
    image: bmotivate,
    title: 'BMotivate',
    subtitle:
      "Your productivity doesn't define your worth. - A reminder to myself after a bout of depression",
    path: 'bmotivate',
  },
  {
    image: robinhood,
    title: 'Bilo',
    subtitle:
      'Fighting perfectionism, and finally getting my own blog started.',
    path: 'bilo',
  },
];

const ProjectDescriptionSection = styled(Section)`
  @media (min-width: 768px) {
    min-height: 65vh;
  }
`;

const ProjectListsSection = styled(Section)`
  ul {
    display: flex;
    gap: 1em;
  }
`;
const Projects = (props: ProjectProps) => {
  return (
    <React.Fragment>
      <ProjectDescriptionSection>{props.children}</ProjectDescriptionSection>
      <ProjectListsSection>
        <ul className='projects'>
          {cards.map((c) => (
            <li key={c.title}>
              <Link to={`/projects/${c.path}`}>
                <ProjectCard title={c.title} subtitle={c.subtitle}>
                  <img src={c.image} alt='Stock Management App' />
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

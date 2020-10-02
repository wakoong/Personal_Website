import * as React from 'react';
import styled from 'styled-components';

import { ProjectCard } from '../components';
import { Article, Section } from '../utils';
import robinhood from '../assets/images/rh-gorilla.png';
import CP from '../assets/images/CoachPlayer.png';
import bmotivate from '../assets/images/nba-gorilla.png';

const ProjectSection = styled(Section)`
  position: relative;

  button {
    position: absolute;
    bottom: 2em;
    right: 2em;
    cursor: pointer;
    padding: 1em 2em;

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
        ? 'black'
        : props.theme.primaryColor};
  }
`;

const cards = [
  {
    image: robinhood,
    title: 'RH Gains',
    subtitle:
      'How to get values from mouse movement and plug them into an animation.',
  },
  {
    image: bmotivate,
    title: 'BMotivate',
    subtitle:
      "Your productivity doesn't define your worth. - A reminder to myself after a bout of depression",
  },
  {
    image: robinhood,
    title: 'Bilo',
    subtitle:
      'Fighting perfectionism, and finally getting my own blog started.',
  },
];

export default () => {
  return (
    <ProjectSection>
      <header>
        <h1>Projects</h1>
      </header>
      <ol className='projects'>
        {cards.map((c) => (
          <li key={c.title}>
            <ProjectCard title={c.title} subtitle={c.subtitle}>
              <img src={c.image} alt='Stock Management App' />
            </ProjectCard>
          </li>
        ))}
      </ol>
      <button>More Projects . . .</button>
    </ProjectSection>
  );
};

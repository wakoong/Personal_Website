import * as React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { projectData } from '../utils';
import ProjectImage from '../assets/images/rh-preview.png';

const ProjectDescription = styled.article`
  position: relative;
  max-width: 60em;
  header {
    h1 {
      color: ${(props) =>
        props.theme.primaryColor === '#FEFEFE'
          ? 'black'
          : props.theme.primaryColor};
      line-height: 1.1em;
      font-weight: 900;
      text-align: start;
      margin-left: -0.1em;
    }

    h4 {
      text-transform: capitalize;
      font-weight: 500;
      margin-top: 0.5em;
    }

    .tools {
      width: 100%;
      display: flex;
      gap: 1em;
      margin-top: 1em;
    }
  }

  p {
    line-height: 1.8em;
    margin: 1em 0;
    padding-bottom: 1em;
    font-size: 1.2em;
    text-align: justify;
    letter-spacing: -0.04em;
  }
`;

const ProjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectImageStyles = styled.div`
  background-image: url(${ProjectImage});
  width: 100%;
  height: 20em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    background-size: contain;
  }
`;

const ToolTag = styled.span`
  background: ${(props) => props.theme.selectColor};
  padding: 0.3em 1em;
  color: ${(props) => props.theme.textColor};
  font-weight: 900;
`;

interface ProjectDescriptionProps extends RouteComponentProps {
  projectId?: string;
}

export default (props: ProjectDescriptionProps) => {
  const data = projectData.filter((d) => d.path === props.projectId);
  const { title, subtitle, url } = data[0];
  return (
    <React.Fragment>
      <ProjectDescription>
        <header>
          <h1>{title}</h1>
          <h4>{subtitle}</h4>
          <div className='tools'>
            <ToolTag color='blue'>React</ToolTag>
            <ToolTag>TypeScript</ToolTag>
            <ToolTag>CSS-in-JS</ToolTag>
          </div>
        </header>

        <p>
          I teamed up with a friend on a game for people to play during the 2020
          United States Democratic Primary Debates. While they watched, users
          could click on a candidate's balloon when they agreed with what they
          were saying.
        </p>
        <p>
          At the end, we have a quantified metric for how well each candidate
          resonated with players. It was really fun to create an in-browser
          game, and figuring out the best ways to sync the game with an external
          video.
        </p>

        {url !== '' && (
          <a href={url}>
            <button>Visit</button>
          </a>
        )}
      </ProjectDescription>
      <ProjectImageContainer>
        {/* map around images... */}
      </ProjectImageContainer>
    </React.Fragment>
  );
};

import * as React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { Button } from '../components';
import { projectData } from '../utils';

const ProjectDescription = styled.article`
  position: relative;
  max-width: 60em;
  header {
    h1 {
      color: ${(props) =>
        props.theme.primaryColor === '#FEFEFE'
          ? '#454545'
          : props.theme.primaryColor};
      line-height: 1.1em;
      font-weight: 900;
      text-align: start;
      margin-left: -0.1em;
    }

    h4 {
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

  .buttons {
    display: flex;
    gap: 1em;

    @media (min-width: 768px) {
      .mobile {
        display: none;
      }
    }
  }
`;

const ProjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  transition: ease all .5s;
  margin-top: 1em;

  @media (min-width: 768px) {
    height: 35vh;
  }

  @media (min-width: 1200px) {
    height: 55vh;
  }
`;

const ProjectImageStyles = styled.div`
  background-image: url(${props => props.image});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
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

export default ({projectId}: ProjectDescriptionProps) => {
  const data = projectData.filter((d) => d.path === projectId);
  const { title, subtitle, url, description, images, tags, live } = data[0];

  return (
    <React.Fragment>
      <ProjectDescription>
        <header>
          <h1>{title}</h1>
          <i><h4>{subtitle}</h4></i>
          <div className='tools'>
            {tags.map((tag, idx) => <ToolTag key={idx}>{tag}</ToolTag>)}
          </div>
        </header>

        {description.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}

        <div className="buttons">
          {live ? (
            <React.Fragment>
              <a href={url} target="_blank">
                <Button text="Check it out!" />
              </a>
            </React.Fragment>
          ) : <Button text="Project will be deployed soon" />}
        </div>

      </ProjectDescription>
      <ProjectImageContainer>
        {images.length ? images.map((image, idx) => <ProjectImageStyles key={idx} image={image} />) : null}
        {/* map around images... */}
      </ProjectImageContainer>
    </React.Fragment>
  );
};

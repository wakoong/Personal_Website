import * as React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s;

  img {
    background: ${(props) => props.theme.lightColor};
    display: block;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-height: 12em;
    object-fit: contain;

    &:hover {
      background: ${(props) => props.theme.hoverBackgroundColor};
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 20em auto;
  }
`;

const Description = styled.aside`
  padding: 0 1em;
  text-align: center;

  h3 {
    font-size: 1.8em;
  }

  p {
    margin-top: 1em;
    line-height: 1.8;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 20em auto;
    padding: 0;

    h3 {
      margin-top: 1em;
    }
  }
`;

interface ICardProps {
  title?: string;
  subtitle?: string;
  children: any;
}

export default ({ title, subtitle, children }: ICardProps) => {
  return (
    <ProjectCard>
      {children}
      <Description>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </Description>
    </ProjectCard>
  );
};

import * as React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 20em;
  cursor: pointer;
  border: 1px solid grey;
  transition: background 0.2s;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-height: 100%;
    z-index: 2;
  }

  &:hover {
    background: ${(props) => props.theme.hoverBackgroundColor};
  }

  @media (min-width: 1200px) {
    height: 25em;
  }
`;

interface ICardProps {
  title?: string;
  subtitle?: string;
  children: any;
}

export default ({ title, subtitle, children }: ICardProps) => {
  return (
    <Card>
      {children}
      <div className='title'>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </div>
    </Card>
  );
};

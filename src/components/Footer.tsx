import * as React from 'react';
import styled from 'styled-components';

import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.svg';

const links = [
  {
    img: instagram,
    link: 'https://www.instagram.com/woosikka/',
  },
  {
    img: linkedin,
    link: 'https://www.linkedin.com/in/woosik90/',
  },
  { img: github, link: 'https://github.com/wakoong/playground' },
];

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: ${(props) => props.theme.lightColor};
  font-size: 0.7em;
  padding: 4em;
  align-items: center;
  text-align: start;

  .copyRight {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 6em;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2em;

  a {
    width: 2em;
    height: 2em;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default () => {
  return (
    <Footer>
      <div />
      <div className='copyRight'>Copyright © 2020, Woosik Koong.</div>
      <IconContainer>
        {links.map((res) => (
          <a href={res.link} key={res.link} target='_blank'>
            <img
              className='socialBtn'
              src={res.img}
              alt={JSON.stringify(res.img)}
            />
          </a>
        ))}
      </IconContainer>
    </Footer>
  );
};

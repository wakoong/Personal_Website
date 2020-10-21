import * as React from 'react';
import styled from 'styled-components';

import ProfileImage from '../assets/images/profile.png';
import { Article, IThemeProps, Section, themes } from '../utils';

const MainSection = styled(Section)`
  display: grid;
  grid-template-areas:
    'image'
    'about'
    'skills';
  gap: 1em;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  text-align: justify;
  letter-spacing: -0.04em;
  transition: ease all .5s;
  min-height: 80vh;

  p,
  div {
    font-size: 1.1em;
  }


  @media (min-width: 768px) {
    grid-template-areas:
      'about image'
      'skills image';
    p,
    div {
      font-size: 1em;
    }
  }

  @media (min-width: 1200px) {
    grid-template-areas:
      'about skills image';

    p,div {
      font-size: 1.1em;
    }
  }
`;

const About = styled(Article)`
  grid-area: about;
  margin-top: 10em;
  margin-bottom: 2em;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Skills = styled(Article)`
  grid-area: skills;
  justify-content: center;
  text-align: center;

  .skills {
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media (min-width: 1200px) {
      margin-top: 2em;
    }
  }
`;

const Image = styled.aside`
  grid-area: image;
  display: flex;
  align-items: center;
  flex-direction: column;

  .image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 25em;
    width: 19em;

    img {
      max-height: 100%;
      height: 100%;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 0 1em;
    justify-content: center;

    .image-container {
      margin-top: -10em;
    }
  }

  @media (min-width: 1200px) {
    justify-content: start;

    .image-container {
      margin-top: 0;
    }
  }


`;

const ThemeSelectContainer = styled.div`
  position: absolute;
  top: 28em;
  width: 100%;

  button {
    cursor: pointer;
    background: ${(props) => props.theme.inputBackgroundColor};
    width: 100%;
    margin: 0 auto;
    padding: 1em;
    border: 2px solid ${(props) => props.theme.primaryColor};
  }
  button:focus {
    outline: none !important;
    border: 5px solid ${(props) => props.theme.emphasisColor};
  }

  .suggestions {
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 10;
  }

  .suggestions li {
    background: ${(props) => props.theme.selectColor};
    width: 100%;
    list-style: none;
    border-bottom: 1px solid ${(props) => props.theme.emphasisColor};
    padding: 1em;
    transition: background 0.2s;
    cursor: pointer;
  }

  .suggestions > li:hover {
    font-weight: 500;
    background: ${(props) => props.theme.hoverBackgroundColor};
  }
`;

interface IMainSectionProps {
  setTheme: (theme: IThemeProps) => IThemeProps;
}

export default ({ setTheme }: IMainSectionProps) => {
  const [clicked, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };

  const handleTheme = (e: any) => {
    e.preventDefault();
    const theme = themes.filter((t) => t.name === e.target.innerHTML);
    setTheme({ ...theme[0].theme });
    setClick(!clicked);
  };

  return (
    <MainSection>
      <About>
        <div className='content'>
          <h1>About</h1>
          <p>
            Hello! I am Woosik, a JavaScript engineer based in Albany, CA. I am a self-taught engineer who constantly strives to write clean and readable codes.
            My goal as a software engineer is to deep dive into the world of JavaScript and explore various fields of studies from web development to machine learning.
            I am always interested in integrating sports with web development and data visualization. Feel free to take a look around the website I built with color themes of my favorite sports teams!
          </p>
        </div>
      </About>
      <Skills>
        <div className='content'>
          <h1>Skills</h1>
          <div className="skills">
            <ul>
              <b><u>Frontend</u></b>
              <li>{'JavaScript (ES6) & TypeScript'}</li>
              <li>{'React (hooks, context)'}</li>
              <li>{'SASS & CSS-in-JS'}</li>
              <li>{'GraphQL & Redux'}</li>
            </ul>
            <ul>
              <b><u>Backend</u></b>
              <li>{'Node.js & Express.js'}</li>
              <li>{'MongoDB'}</li>
              <li>{'Django'}</li>
            </ul>
          </div>
        </div>
      </Skills>
      <Image>
        <div className='image-container'>
          <img
            className='profile-image'
            src={ProfileImage}
            alt='profile image'
          />
          <ThemeSelectContainer>
            <button className='search' onClick={handleClick}>
              Select themes
            </button>
            {clicked && (
              <ul className='suggestions' onClick={handleTheme}>
                {themes.map((theme) => (
                  <li key={theme.name}>{theme.name}</li>
                ))}
              </ul>
            )}
          </ThemeSelectContainer>
        </div>
      </Image>
    </MainSection>
  );
};

import * as React from 'react';
import styled from 'styled-components';

import ProfileImage from '../assets/images/profile.png';
import { useLocalStorageState } from '../hooks';
import { Article, IThemeProps, Section, themes } from '../utils';

const MainSection = styled(Section)`
  display: grid;
  grid-template-areas:
    'image'
    'about'
    'skills';
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};

  @media (min-width: 768px) {
    grid-template-areas:
      'about about image'
      'skills skills image';
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
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

const Skills = styled(Article)`
  grid-area: skills;
  justify-content: center;

  @media (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

const Image = styled.aside`
  grid-area: image;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 1em;
  }

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
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
        </div>
      </About>
      <Skills>
        <div className='content'>
          <h1>Skills</h1>
          <p>
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
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

import * as React from 'react';
import styled from 'styled-components';

import ProfileImage from '../assets/images/steph.png';

const Section = styled.section`
  min-height: 80vh;
  width: 100%;
`;

const AboutSection = styled(Section)`
  display: grid;
  grid-template-areas:
    'profile'
    'about'
    'skills';
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};

  @media (min-width: 768px) {
    grid-template-areas:
      'about about profile'
      'about about profile'
      'skills skills skills';
  }
`;

const About = styled.aside`
  grid-area: about;
`;

const Profile = styled.aside`
  grid-area: profile;
  display: flex;
  align-items: center;
  flex-direction: column;

  .image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30em;
    width: 30em;

    img {
      max-height: 100%;
      height: 100%;
      width: 100%;
    }
  }
`;

const Skills = styled.aside`
  grid-area: skills;
`;

const ThemeSearchForm = styled.form`
  position: absolute;
  top: 28em;
  width: 25em;

  input {
    width: 100%;
    margin: 0 auto;
    padding: 1em;
    border: 2px solid ${(props) => props.theme.primaryColor};
  }
  input:focus {
    outline: none !important;
    border: 5px solid ${(props) => props.theme.textColor};
  }

  .suggestions {
    margin: 0;
    padding: 0;
    position: relative;
  }

  .suggestions li {
    width: 100%;
    background: white;
    list-style: none;
    border-bottom: 1px solid ${(props) => props.theme.textColor};
    padding: 1em;
    transition: background 0.2s;
    cursor: pointer;
  }

  .suggestions > li:hover {
    font-weight: 500;
    background: ${(props) => props.theme.hoverBackgroundColor};
  }
`;

const themes = [
  'Default',
  'Golden State Warriors',
  'Oakland Athletics',
  'San Francisco Giants',
];

const Landing = () => {
  const [clicked, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };

  return (
    <React.Fragment>
      <AboutSection>
        <About>
          <div className='text-container' />
        </About>
        <Profile>
          <div className='image-container'>
            <img
              className='profile-image'
              src={ProfileImage}
              alt='profile image'
            />
            <ThemeSearchForm>
              <input type='text' className='search' onClick={handleClick} />
              {clicked && (
                <ul className='suggestions'>
                  {themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                  ))}
                </ul>
              )}
            </ThemeSearchForm>
          </div>
        </Profile>
        <Skills>
          <div className='text-container' />
        </Skills>
      </AboutSection>
    </React.Fragment>
  );
};

export default Landing;

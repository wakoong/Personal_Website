import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-image" />
        <section>
          <p>👋 Welcome!</p>
          <p>
            👨🏻‍🔬 This is my "lab" where I get to experiment various things and
            showcase my mini projects. Things can go pretty crazy at times but I
            manage to eventually fix them.
          </p>
          <p>
            👨🏻‍💻 I am an enthusiatic learner who likes documenting progress. Here
            is the link to my official blog website{' '}
            <a href="https://www.donkeykoong.com" target="_blank">
              www.donkeykoong.com
            </a>
            . You can visit my website to find out why it's called donkeykoong.
            🤔
          </p>
          <p>
            🏀 I love basketball #ballislife{' '}
            <a href="https://www.instagram.com/woosikka/" target="_blank">
              instagram icon goes here
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default About;

import React from 'react';

import instagram from '../../assets/images/instagram.png';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <section>
          <div className='image' />
          <p className='title'>👋 Welcome!</p>
          <p>
            👨🏻‍🔬 This is my "lab" where I get to experiment various things and showcase my mini projects. Things can go
            pretty crazy at times but I manage to eventually fix them.
          </p>
          <p>
            👨🏻‍💻 I am an enthusiatic learner who likes documenting progress. My main programming language is JavaScript
            and I specialize in ReactJS for a frontend framework. I also have some experience with Python and Django. I
            am recently interested in learning more about Node.js, MongoDB, GraphQL, and algorithms.
          </p>
          <p>🏀 Also, I love basketball and learning new human languages.</p>
          <p className='bold'>"Optimisim is a moral choice. Cynicism is the last refuge for cowards" - Jim Yong Kim</p>
          <br />
          <br />
        </section>
      </div>
    );
  }
}

export default About;
